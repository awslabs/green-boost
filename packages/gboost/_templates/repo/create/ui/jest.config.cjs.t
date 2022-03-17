---
to: ui/jest.config.cjs
---

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    // until jest 28 is released with support for package.json exports map,
    // need to include this transform
    "^src/(.*)$": "<rootDir>/src/$1",
    "^common/(.*)$": "<rootDir>/../common/src/$1",
  },
};
