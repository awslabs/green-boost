import NextLink from "next/link";
import { Link } from "./Link";
import { Feature } from "./Feature";
import {
  Code,
  Key,
  Landmark,
  ShieldCheck,
  ToyBrick,
  Workflow,
} from "lucide-react";
import { gradientClasses } from "./utils";

export function Landing() {
  return (
    <div className="flex flex-col gap-10 my-6">
      <div className="flex flex-col gap-5 items-center">
        <h1
          className={`${gradientClasses} bg-clip-text text-transparent text-6xl sm:text-9xl font-bold text-center`}
        >
          Green Boost
        </h1>
        <div className="text-center text-xl sm:text-2xl">
          Build full stack cloud native web apps on AWS faster
        </div>
        <div>
          <NextLink
            className={`inline-block ${gradientClasses} no-underline rounded-full py-3 px-6 drop-shadow-md text-black transition-all select-none text-lg`}
            href="/overview/intro"
          >
            Get Started
            <span>→</span>
          </NextLink>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-items-center [&>div:nth-child(3n+1)>div>svg]:text-lime-400 [&>div:nth-child(3n+2)>div>svg]:text-emerald-400 [&>div:nth-child(3n+3)>div>svg]:text-cyan-400">
        <Feature
          description="Web apps include authentication, user management and user settings so you can focus on features that add business value"
          icon={Key}
          title="Turn Key Web App in Minutes"
        />
        <Feature
          description={
            <p>
              Built on the six pillars of the{" "}
              <Link href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html">
                AWS Well Architected Framework
              </Link>
              : operational excellence, security, reliability, performance
              efficiency, cost optimization, and sustainability
            </p>
          }
          icon={Landmark}
          title="Built on the AWS Well Architected Framework"
        />
        <Feature
          description="Flexible AWS CDK Constructs and React Components built for common web app needs to help you build new features faster"
          icon={ToyBrick}
          title="Composable Constructs and Components"
        />
        <Feature
          description={
            <p>
              130+ AWS best practices enforced by{" "}
              <Link href="https://github.com/cdklabs/cdk-nag">cdk-nag</Link>.
              3rd party vulnerability scanning via{" "}
              <Link href="https://docs.npmjs.com/cli/v9/commands/npm-audit">
                npm audit
              </Link>
              .
            </p>
          }
          icon={ShieldCheck}
          title="Automated Security Mechanisms"
        />
        <Feature
          description={
            <p>
              Ready to be deployed Continuous Integration / Continuous Delivery
              Pipeline supporting multi-account deployments powered by{" "}
              <Link href="https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html">
                CDK Pipelines
              </Link>
            </p>
          }
          icon={Workflow}
          title="Primed CI/CD Pipeline"
        />
        <Feature
          description={
            <p>
              Preconfigured static code analysis, code formatting, typechecking,
              unit testing, multi-workspace package management, DB port
              forwarding, clean code architecture, and much more.
            </p>
          }
          icon={Code}
          title="Supercharged Development Setup"
        />
      </div>
    </div>
  );
}
