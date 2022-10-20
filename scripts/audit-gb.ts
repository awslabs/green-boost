import { execSync } from "node:child_process";

type AllowedAdvisories = Record<
  string,
  { package?: string; justification: string }
>;
const allowedAdvisories: AllowedAdvisories = {
  // "1067407": { package: "package-name", justification: "Because..." }
  "1081698": { package: "terser", justification: "used in docs site" },
};
interface Advisory {
  module_name: string;
  id: string;
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
      console.log(jsonOutput.advisories[advisoryId]);
      nonAllowedAdvisories.push({
        module_name: jsonOutput.advisories[advisoryId]?.module_name as string,
        id: advisoryId,
      });
    }
  }
  if (nonAllowedAdvisories.length) {
    const nameAndIdStr = nonAllowedAdvisories
      .map((naa) => `${naa.module_name} (${naa.id})`)
      .join(", ");
    console.error(
      `The following 3rd party dependencies have advisories and are not allowed: ${nameAndIdStr}`
    );
    const nameStr = nonAllowedAdvisories
      .map((naa) => naa.module_name)
      .join(" ");
    console.error(
      `Run: "pnpm -r why ${nameStr}" to see which packages depend on them`
    );
    process.exit(1);
  } else if (advisoryIds.length) {
    console.log("All 3rd party dependencies advisories are allowed");
  } else {
    console.log("No advisories for packages");
  }
}
