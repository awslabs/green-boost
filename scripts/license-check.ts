import { execSync } from "node:child_process";

const allowedLicenses = [
  "(MIT AND Zlib)",
  "(MIT OR GPL-3.0-or-later)",
  "(WTFPL OR MIT)",
  "(MIT OR CC0-1.0)",
  "Apache-2.0",
  "APACHEv2",
  "Apache-2.0 AND MIT",
  "MIT",
  "MIT-0",
  "MIT/X11",
  "Unknown",
  "Unlicense",
  "0BSD",
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
  if (!allowedLicenses.includes(license)) {
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
