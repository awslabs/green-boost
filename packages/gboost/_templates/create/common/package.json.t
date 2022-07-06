{
  "name": "<%= repoName %>-common",
  "version": "0.1.0",
  "type": "module",
  "engines": {
    "node": ">=16"
  },
  "scripts": {
    "lint": "eslint \"src/**/*.ts\"",
    "test": "vitest run"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.15.0",
    "@typescript-eslint/parser": "^5.15.0",
    "eslint": "^8.11.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-define-config": "^1.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.6.0",
    "typescript": "^4.6.2",
    "vite": "^2.9.12",
    "vitest": "^0.17.0"
  }
}
