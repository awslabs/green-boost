{
  "name": "@{{GB_APP_ID}}/ui",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite",
    "lint": "eslint \"src/**/*.{ts,tsx}\"",
    "preview": "vite preview",
    "test": "vitest run --passWithNoTests",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@aws-amplify/ui-react": "^4.1.0",
    "@fontsource/inter": "^4.5.14",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.8",
    "@tanstack/react-query": "^4.19.1",
    "@vanilla-extract/css": "^1.9.2",
    "gboost-ui": "^0.31.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@vanilla-extract/vite-plugin": "^3.7.0",
    "@vitejs/plugin-react": "^3.1.0",
    "aws-amplify": "5.0.16",
    "eslint": "^8.29.0",
    "eslint-define-config": "^1.12.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.4",
    "vite-plugin-html": "^3.2.0",
    "vite-tsconfig-paths": "^4.0.5",
    "vitest": "^0.29.1"
  }
}