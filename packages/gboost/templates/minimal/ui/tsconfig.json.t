{
  "extends": [
    "@{{GB_APP_ID}}/tsconfig/tsconfig.next.json"
  ],
  "compilerOptions": {
    "exactOptionalPropertyTypes": false,
    "paths": {
      "@/*": ["./src/*"],
    },
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules",
  ]
}
