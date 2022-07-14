import { execSync } from "node:child_process";

type AllowedAdvisoryOverride = Record<string, { package: string, justification: string }>;
const allowedAdvisories: AllowedAdvisoryOverride = {
  "1067407": { package: "follow-redirects", justification: "Used on docs static sit. Minimal risk" },
  "1070206": { package: "async", justification: "Used in build tool of dependency of hygen for gboost (CLI). CLI user will never interact with this package. Minimal risk" },
  "1070259": { package: "trim", justification: "Used on docs static site. Minimal risk" },
  "1070412": { package: "ejs", justification: "Used in the gboost CLI. Users of CLI provide values for template injection to create their own repository. Minimal risk" },
  "1070415": { package: "nth-check", justification: "Used on docs static site. Minimal risk"},
};
interface AuditOuput {
  advisories: Record<string, unknown>;
}

try {
  execSync("pnpm audit --audit-level moderate --json");
} catch (err) {
  const error = err as { stdout: Buffer };
  const stringOutput = error.stdout.toString("utf8");
  const jsonOutput = JSON.parse(stringOutput) as AuditOuput;
  const nonAllowedAdvisories = [] as string[];
  for (const advisoryId of Object.keys(jsonOutput.advisories)) {
    if (!(advisoryId in allowedAdvisories)) {
      nonAllowedAdvisories.push(`${allowedAdvisories[advisoryId].package} (${advisoryId})`)
    }
  }
  if (nonAllowedAdvisories.length) {
    throw new Error(`The following 3rd party dependencies have advisories and are not allowed: ${nonAllowedAdvisories.join(", ")}`)
  } else {
    console.log("All 3rd party dependencies advisories are allowed");
  }
}