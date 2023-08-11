{
  "name": "@{{GB_APP_ID}}/infra",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "deploy:local": "cdk deploy \"**\" --require-approval never --no-rollback",
    "deploy:pipeline": "cdk --app \"./node_modules/.bin/tsx src/pipeline/pipeline-app.ts\" deploy \"*\" --no-rollback",
    "destroy:local": "cdk destroy --force \"**\"",
    "destroy:pipeline": "cdk --app \"./node_modules/.bin/tsx src/pipeline/pipeline-app.ts\" --force destroy \"*\"",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run",
    "watch": "cdk watch --hotswap-fallback --exclusively",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "aws-cdk": "^2.88.0",
    "aws-cdk-lib": "^2.88.0",
    "cdk-monitoring-constructs": "^5.3.4",
    "cdk-nag": "^2.27.76",
    "cdk-nextjs-standalone": "^4.0.0-beta.1",
    "constructs": "^10.2.69",
    "gboost-common": "^0.12.1",
    "gboost-infra": "^0.16.1"
  },
  "devDependencies": {
    "@types/node": "^18.15.11",
    "eslint": "^8.45.0",
    "eslint-define-config": "^1.17.0",
    "tsx": "^3.12.7",
    "typescript": "^5.1.6",
    "vitest": "^0.33.0"
  }
}