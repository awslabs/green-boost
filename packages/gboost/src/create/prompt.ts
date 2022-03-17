import { userInfo } from "node:os";
import enquirer from "enquirer";

interface SelectChoice {
  name: string;
  disabled?: boolean;
  value?: string;
}

enum AuthnChoices {
  userPool = "Cognito User Pool",
  federatedUserPool = "Federated Cognito User Pool (Comming Soon)",
  none = "None",
}

const authnChoices: SelectChoice[] = [
  { name: AuthnChoices.userPool },
  { name: AuthnChoices.federatedUserPool, disabled: true },
  { name: AuthnChoices.none },
];

enum FeatureChoices {
  userMgmt = "User Management",
  demoDashboard = "Demo Dashboard",
}

export function getAnswers(): Promise<Record<string, string | string[]>> {
  return enquirer.prompt([
    {
      type: "input",
      name: "repoName",
      message:
        "Repository Name (only lower case letters, numbers, and dashes):",
      initial: "my-gb-app",
      validate: (repoName: string) =>
        /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
          repoName
        ) ||
        `Package name: ${repoName} does not follow rules from npm. Learn more: https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name`,
    },
    {
      type: "input",
      name: "devStackPrefix",
      message: "Dev Stack Prefix:",
      initial: userInfo().username,
    },
    {
      type: "select",
      name: "authn",
      message: "Authentication: (space to select, enter to confirm)",
      choices: authnChoices,
      initial: authnChoices.findIndex((c) => c.name === "Cognito User Pool"),
    },
    {
      type: "multiselect",
      name: "features",
      message: "Features: (space to select, enter to confirm)",
      // choices: features.filter((f) => f.name === FeatureChoices.userMgmt),
      // @ts-expect-error incorrect types
      choices() {
        const features = [
          {
            name: FeatureChoices.demoDashboard,
            value: FeatureChoices.userMgmt,
          },
        ];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((this as any).state.answers.authn !== AuthnChoices.none) {
          features.push({
            name: FeatureChoices.userMgmt,
            value: FeatureChoices.userMgmt,
          });
        }
        return features;
      },
    },
  ]);
}
