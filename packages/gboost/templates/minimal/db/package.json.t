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
    "eslint": "^8.32.0",
    "eslint-define-config": "^1.14.0",
    "typescript": "^4.9.4"
  }
}