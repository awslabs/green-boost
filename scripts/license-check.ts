import { execSync } from "node:child_process";

/**
 * Array of strings of allowed licenses or functions that accept a license
 * and return `true` if allowed and `false` if not allowed
 */
const allowedLicenses: (string | ((l: string) => boolean))[] = [
  (l) => l.includes("Apache-2.0"),
  "APACHEv2",
  "BlueOak-1.0.0",
  (l) => l.includes("BlueOak"),
  (l) => l.includes("BSD"),
  (l) => l.includes("CC"),
  (l) => l.includes("gpl"),
  "ISC",
  (l) => l.includes("MIT"),
  (l) => l.includes("MPL"),
  "Python-2.0",
  "Unknown",
  "Unlicense",
  "EPL",
  "W3C",
];

const licenseOutputString = execSync("pnpm licenses list --json", {
  encoding: "utf-8",
});
interface Package {
  name: string;
  version: string;
  path: string;
}

const licenseOutput: Record<string, Package[]> =
  JSON.parse(licenseOutputString);
const notAllowedLicenses: string[] = [];
for (const [license, packages] of Object.entries(licenseOutput)) {
  let allowed = false;
  for (const allowedLicense of allowedLicenses) {
    if (typeof allowedLicense === "string") {
      if (license === allowedLicense) {
        allowed = true;
      }
    } else {
      if (allowedLicense(license)) {
        allowed = true;
      }
    }
  }
  if (!allowed) {
    notAllowedLicenses.push(license);
    console.log({ [license]: packages });
  }
}

if (notAllowedLicenses.length) {
  console.error(
    "3rd party dependency not allowed licenses: " +
      notAllowedLicenses.join(", ") +
      "\n"
  );
  console.error("Please run 'pnpm licenses list' for more information");
  process.exit(1);
} else {
  console.log("All 3rd party dependency licenses are allowed");
}
