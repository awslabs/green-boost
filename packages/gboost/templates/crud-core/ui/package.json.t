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
    "@hookform/resolvers": "^3.1.1",
    "@mui/icons-material": "^5.14.1",
    "@mui/lab": "5.0.0-alpha.138",
    "@mui/material": "^5.14.1",
    "@mui/x-data-grid": "^6.10.2",
    "gboost-ui": "^0.35.1",
    "next": "13.4.12",
    "open-next": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.45.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "eslint": "^8.45.0",
    "eslint-define-config": "^1.21.0",
    "typescript": "^5.1.6",
    "vitest": "^0.33.0",
    "webpack": "^5.88.2"
  }
}