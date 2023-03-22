{
  "name": "@{{GB_APP_ID}}/db",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "watch": "tsc -w",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "@{{GB_APP_ID}}/eslint-config-node": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "eslint": "^8.36.0",
    "eslint-define-config": "^1.16.0",
    "typescript": "^4.9.4"
  }
}