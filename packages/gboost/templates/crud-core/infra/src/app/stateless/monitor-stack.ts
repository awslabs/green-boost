// @ts-nocheck
import { Stack, type StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import {
  DefaultDashboardFactory,
  MonitoringFacade,
  SnsAlarmActionStrategy,
} from "cdk-monitoring-constructs";
import { Config } from "../../config/config";
import { Topic } from "aws-cdk-lib/aws-sns";
import { Key } from "aws-cdk-lib/aws-kms";
import { AnyPrincipal, Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

interface MonitorStackProps extends StackProps {
  stacks: Stack[];
  config: Config;
}

export class MonitorStack extends Stack {
  #props: MonitorStackProps;

  constructor(scope: Construct, id: string, props: MonitorStackProps) {
    super(scope, id, props);
    this.#props = props;
    const onAlarmTopic = this.#createTopic();
    // TODO: comment out for template
    // onAlarmTopic.addSubscription(new EmailSubscription("admin@example.com"));
    this.#createMonitoringFacade(onAlarmTopic);
  }

  #createTopic() {
    const topicMasterKey = new Key(this, "MonitorAlarmTopicKey", {
      enableKeyRotation: true,
    });
    const onAlarmTopic = new Topic(this, "OnAlarmTopic", {
      displayName: `${Config.appId} Monitoring Alarm Topic for stage: ${
        this.#props.config.stageName
      }`,
      masterKey: topicMasterKey,
    });
    onAlarmTopic.addToResourcePolicy(
      new PolicyStatement({
        actions: ["sns:Publish"],
        effect: Effect.DENY,
        principals: [new AnyPrincipal()],
        conditions: { Bool: { "aws:SecureTransport": false } },
        resources: [onAlarmTopic.topicArn],
      }),
    );
    return onAlarmTopic;
  }

  #createMonitoringFacade(onAlarmTopic: Topic) {
    const monitoring = new MonitoringFacade(this, "Facade", {
      dashboardFactory: new DefaultDashboardFactory(this, "DashboardFactory", {
        dashboardNamePrefix: `${this.#props.config.stageId}-dashboard`,
      }),
      alarmFactoryDefaults: {
        actionsEnabled: true,
        action: new SnsAlarmActionStrategy({ onAlarmTopic }),
        alarmNamePrefix: Config.appId,
      },
    });
    for (const stack of this.#props.stacks) {
      // TODO: why aren't alarms being created?
      monitoring.monitorScope(stack, {
        billing: { enabled: false },
        ec2: { enabled: false },
        elasticCache: { enabled: false },
      });
    }
  }
}
