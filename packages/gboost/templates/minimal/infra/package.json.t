{
  "name": "@{{GB_APP_ID}}/infra",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "deploy:local": "cdk deploy \"**\" --require-approval never",
    "deploy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" deploy \"*\"",
    "destroy:local": "cdk destroy --force \"**\"",
    "destroy:pipeline": "cdk --app \"./node_modules/.bin/ts-node src/pipeline/pipeline-app.ts\" --force destroy \"*\"",
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run --passWithNoTests",
    "watch": "cdk --watch",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "aws-cdk": "^2.72.1",
    "aws-cdk-lib": "^2.72.1",
    "cdk-nag": "^2.25.2",
    "constructs": "^10.1.300",
    "gboost-common": "^0.11.0",
    "gboost-infra": "^0.13.2",
    "vite": "^4.2.1",
    "vite-node": "^0.29.8"
  },
  "devDependencies": {
    "@types/node": "^18.15.11",
    "eslint": "^8.37.0",
    "eslint-define-config": "^1.17.0",
    "typescript": "^4.9.5",
    "vitest": "^0.29.8"
  }
}