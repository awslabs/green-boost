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
    "test": "vitest run"
  },
  "dependencies": {
    "@amcharts/amcharts5": "^5.2.9",
    "@aws-amplify/ui-react": "^3.0.1",
    "@fontsource/inter": "^4.5.11",
    "@mantine/hooks": "^3.6.14",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.8",
    "aws-amplify": "^4.3.26",
    "gboost-common": "^0.7.0",
    "gboost-ui": "^0.23.0",
    "graphql": "^15.8.0",
    "graphql-tag": "^2.12.6",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@types/react": "^17.0.47",
    "@types/react-dom": "^17.0.17",
    "@vitejs/plugin-react": "^1.3.2",
    "eslint": "^8.18.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-define-config": "^1.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^2.6.2",
    "typescript": "^4.7.4",
    "vite": "^2.9.12",
    "vitest": "^0.17.0",
    "vite-plugin-html": "^2.1.2",
    "vite-tsconfig-paths": "^3.5.0"
  }
}