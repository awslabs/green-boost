---
to: ui/package.json
---

{
  "name": "<%= repoName %>-front-end",
  "version": "0.1.0",
  "type": "module",
  "private": true,
  "engines": {
    "node": ">=16"
  },
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite",
    "lint": "eslint \"src/**/*.{ts,tsx}\"",
    "preview": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "@amcharts/amcharts5": "^5.1.8",
    "@aws-amplify/ui-react": "^2.10.1",
    "@fontsource/inter": "^4.5.5",
    "@mantine/hooks": "^3.6.14",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.7",
    "aws-amplify": "^4.3.16",
    "gboost-common": "^0.4.0",
    "gboost-ui": "^0.10.0",
    "graphql": "^15.8.0",
    "graphql-tag": "^2.12.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.2.2"
  },
  "devDependencies": {
    "@types/jest": "^27.4.1",
    "@types/react": "^17.0.40",
    "@types/react-dom": "^17.0.13",
    "@vitejs/plugin-react": "^1.2.0",
    "eslint": "^8.11.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.0",
    "eslint-define-config": "^1.3.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.0",
    "ts-jest": "^27.1.3",
    "typescript": "~4.5.5",
    "vite": "^2.8.6",
    "vite-plugin-html": "^2.1.2",
    "vite-tsconfig-paths": "^3.4.1"
  },
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@babel/plugin-syntax-flow",
        "@babel/plugin-transform-react-jsx",
        "react-native"
      ]
    }
  }
}