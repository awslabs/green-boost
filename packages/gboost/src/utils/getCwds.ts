import { existsSync } from "node:fs";

/**
 * Get front end and back end directories allowing user to either be in
 * my-gb-app root directory or a child directory like back-end or front-end
 * when running: gboost deploy-dev
 */
export function getCwds(): { uiCwd: string; infraCwd: string } {
  let uiCwd = "ui";
  let infraCwd = "infra";
  if (existsSync("../" + infraCwd) && existsSync("../" + uiCwd)) {
    infraCwd = "../" + infraCwd;
    uiCwd = "../" + uiCwd;
  } else if (!existsSync(uiCwd) || !existsSync(infraCwd)) {
    throw new Error(
      "gboost deploy-dev must be run in root or root child directories"
    );
  }
  return { infraCwd, uiCwd };
}
