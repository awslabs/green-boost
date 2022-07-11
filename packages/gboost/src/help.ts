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
      "\n\tgboost run-fn\tRun a Node.js Lambda Function locally" +
      "\n\t\t-h, --handler\tPath to handler to invoke" +
      "\n\t\t-e, --event\tOptional event to parse and pass to handler" +
      "\n\t\t-a, --functionArn\tOptional function arn/name to inject context and environment variables" +
      "\n\tgboost help" +
      "\n" +
      "\nOptions:" +
      "\n\t-d, --debug\tlevel\terror|warn|info|debug|trace"
  );
}
