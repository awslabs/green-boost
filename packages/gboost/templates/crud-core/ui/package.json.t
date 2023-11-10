{
  "name": "@{{GB_APP_ID}}/ui",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start",
    "test": "vitest run",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@emotion/cache": "^11.11.0",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@hookform/resolvers": "^3.3.2",
    "@mui/icons-material": "^5.14.16",
    "@mui/lab": "5.0.0-alpha.152",
    "@mui/material": "^5.14.17",
    "@mui/x-data-grid": "^6.18.1",
    "gboost-ui": "^0.35.2",
    "next": "13.5.6",
    "open-next": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "esbuild": "0.19.5",
    "eslint": "^8.53.0",
    "eslint-define-config": "^1.24.1",
    "typescript": "^5.2.2",
    "vitest": "^0.34.6",
    "webpack": "^5.89.0"
  }
}