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
    "@amcharts/amcharts5": "^5.1.13",
    "@aws-amplify/ui-react": "^2.15.5",
    "@fontsource/inter": "^4.5.7",
    "@mantine/hooks": "^3.6.14",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.8",
    "aws-amplify": "^4.3.20",
    "gboost-common": "^0.5.1",
    "gboost-ui": "^0.16.0",
    "graphql": "^15.8.0",
    "graphql-tag": "^2.12.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@types/jest": "^27.4.1",
    "@types/react": "^17.0.44",
    "@types/react-dom": "^17.0.15",
    "@vitejs/plugin-react": "^1.3.1",
    "eslint": "^8.13.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-define-config": "^1.4.0",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.6.2",
    "ts-jest": "^27.1.4",
    "typescript": "~4.5.5",
    "vite": "^2.9.5",
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