export function showHelp() {
  console.log(
    "usage: gboost COMMAND" +
      "\nCommands:" +
      "\n\tgboost create\tCreate a repository to build a Green Boost app" +
      "\n\tgboost deploy-dev\tDeploy a Green Boost app" +
      "\n\t\t-h, --hotswap\tAttempts a faster, short-circuit deployment if possible" +
      "\n\t\t-b, --backend-only\tOnly deploys backend" +
      "\n\t\t-f, --frontend-only\tOnly deploys frontend" +
      "\n\tgboost destroy-dev\tDestroy a Green Boost app" +
      "\n\t\t-b, --backend-only\tOnly destroys backend" +
      "\n\t\t-f, --frontend-only\tOnly destroys frontend" +
      "\n\tgboost help" +
      "\n" +
      "\nOptions:" +
      "\n\t-d, --debug\tlevel\terror|warn|info|debug|trace"
  );
}
