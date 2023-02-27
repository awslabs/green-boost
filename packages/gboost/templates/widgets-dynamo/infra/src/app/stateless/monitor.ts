// @ts-nocheck
import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";
import { MonitoringFacade } from "cdk-monitoring-constructs";

interface UiProps extends StackProps {
  stacks: Stack[];
}

export class Monitor extends Stack {
  constructor(scope: Construct, id: string, props: UiProps) {
    super(scope, id, props);
    const monitoring = new MonitoringFacade(this, "Facade", {});
    for (const stack of props.stacks) {
      monitoring.monitorScope(stack, {
        billing: { enabled: false },
        ec2: { enabled: false },
        elasticCache: { enabled: false },
      });
    }
  }
}
