{
  "name": "<%= repoName %>-common",
  "version": "0.1.0",
  "type": "module",
  "engines": {
    "node": ">=16"
  },
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "jest"
  },
  "devDependencies": {
    "@types/jest": "^27.4.1",
    "@typescript-eslint/eslint-plugin": "^5.15.0",
    "@typescript-eslint/parser": "^5.15.0",
    "eslint": "^8.11.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.3.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.0",
    "ts-jest": "^27.1.3",
    "typescript": "^4.6.2"
  }
}
