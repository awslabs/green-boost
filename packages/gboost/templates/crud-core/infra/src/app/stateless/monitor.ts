// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import {
  DefaultDashboardFactory,
  MonitoringFacade,
} from "cdk-monitoring-constructs";
import type { StageConfig } from "../../config/stage-config.js";

interface UiProps extends StackProps {
  stacks: Stack[];
  config: StageConfig;
}

export class Monitor extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    const monitoring = new MonitoringFacade(this, "Facade", {
      dashboardFactory: new DefaultDashboardFactory(this, "DashboardFactory", {
        dashboardNamePrefix: `${props.config.stageId}-dashboard`,
      }),
    });
    for (const stack of props.stacks) {
      monitoring.monitorScope(stack, {
        billing: { enabled: false },
        ec2: { enabled: false },
        elasticCache: { enabled: false },
      });
    }
  }
}

