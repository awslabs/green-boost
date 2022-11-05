import { execSync } from "node:child_process";

type AllowedAdvisories = Record<
  string,
  { package?: string; justification: string }
>;
const allowedAdvisories: AllowedAdvisories = {
  // "1067407": { package: "package-name", justification: "Because..." }
};
interface Advisory {
  module_name: string;
  id: string;
  patched_versions: string;
  // more fields but N/A for this script
}
interface AuditOuput {
  advisories: Record<string, Advisory>;
}

try {
  execSync("pnpm audit --audit-level moderate --json");
  console.log("No known vulnerabilities found");
} catch (err) {
  const error = err as { stdout: Buffer };
  const stringOutput = error.stdout.toString("utf8");
  const jsonOutput = JSON.parse(stringOutput) as AuditOuput;
  const nonAllowedAdvisories = [] as Advisory[];
  const advisoryIds = Object.keys(jsonOutput.advisories);
  for (const advisoryId of advisoryIds) {
    if (!(advisoryId in allowedAdvisories)) {
      const advisory = jsonOutput.advisories[advisoryId];
      if (advisory) {
        nonAllowedAdvisories.push(advisory);
      }
    }
  }
  if (nonAllowedAdvisories.length) {
    for (const advisory of nonAllowedAdvisories) {
      console.log(JSON.stringify(advisory, null, 2) + "\n");
      console.error(
        `If benign, add "${advisory.module_name}": "${advisory.patched_versions}" to pnpm.overrides in root package.json and then run pnpm i`
      );
    }
    process.exit(1);
  } else if (advisoryIds.length) {
    console.log("All 3rd party dependencies advisories are allowed");
  } else {
    console.log("No advisories for packages");
  }
}
