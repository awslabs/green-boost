import { execSync } from "node:child_process";

type AllowedAdvisories = Record<
  string,
  { package?: string; justification: string }
>;
const allowedAdvisories: AllowedAdvisories = {
  "1075647": {
    package: "got",
    justification: "Used on docs static site. Minimal risk",
  },
  "1070259": {
    package: "trim",
    justification: "Used on docs static site. Minimal risk",
  },
};
interface Advisory {
  module_name: string;
  // more fields but N/A for this script
}
interface AuditOuput {
  advisories: Record<string, Advisory>;
}

try {
  execSync("pnpm audit --audit-level moderate --json");
} catch (err) {
  const error = err as { stdout: Buffer };
  const stringOutput = error.stdout.toString("utf8");
  const jsonOutput = JSON.parse(stringOutput) as AuditOuput;
  const nonAllowedAdvisories = [] as string[];
  const advisoryIds = Object.keys(jsonOutput.advisories);
  for (const advisoryId of advisoryIds) {
    if (!(advisoryId in allowedAdvisories)) {
      nonAllowedAdvisories.push(
        `${jsonOutput.advisories[advisoryId]?.module_name} (${advisoryId})`
      );
    }
  }
  if (nonAllowedAdvisories.length) {
    throw new Error(
      `The following 3rd party dependencies have advisories and are not allowed: ${nonAllowedAdvisories.join(
        ", "
      )}`
    );
  } else if (advisoryIds.length) {
    console.log("All 3rd party dependencies advisories are allowed");
  } else {
    console.log("No advisories for packages");
  }
}
