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
    "aws-cdk": "^2.110.0",
    "aws-cdk-lib": "^2.110.0",
    "cdk-monitoring-constructs": "^6.5.0",
    "cdk-nag": "^2.27.193",
    "cdk-nextjs-standalone": "^4.0.0-beta.12",
    "constructs": "^10.3.0",
    "gboost-common": "^0.12.1",
    "gboost-infra": "^0.16.2"
  },
  "devDependencies": {
    "@types/node": "^20.9.1",
    "cdk-dia": "^0.10.0",
    "eslint": "^8.53.0",
    "eslint-define-config": "^2.0.0",
    "tsx": "^4.1.3",
    "typescript": "^5.2.2",
    "vitest": "^0.34.6"
  }
}