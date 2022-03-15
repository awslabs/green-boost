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
    "@amcharts/amcharts5": "^5.1.4",
    "@aws-amplify/api-graphql": "^2.2.21",
    "@aws-amplify/auth": "^4.4.1",
    "@aws-amplify/ui": "3.0.11",
    "@aws-amplify/ui-react": "2.2.1",
    "@fontsource/inter": "^4.5.4",
    "@mantine/hooks": "^3.6.7",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.6",
    "aws-amplify": "^4.3.14",
    "gboost-common": "^0.3.3",
    "gboost-ui": "^0.8.0",
    "graphql": "^15.8.0",
    "graphql-tag": "^2.12.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.2.1"
  },
  "devDependencies": {
    "@types/jest": "^27.4.0",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.11",
    "@vitejs/plugin-react": "^1.2.0",
    "eslint": "^8.9.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-config-react-app": "^7.0.0",
    "eslint-define-config": "^1.2.5",
    "eslint-plugin-jest": "^25.7.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.5.1",
    "prettier": "^2.5.1",
    "ts-jest": "^27.1.3",
    "typescript": "^4.5.5",
    "vite": "^2.8.3",
    "vite-plugin-html": "^2.1.2",
    "vite-tsconfig-paths": "^3.4.0"
  }
}