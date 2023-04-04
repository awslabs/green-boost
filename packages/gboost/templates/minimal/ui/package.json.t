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
    "@aws-amplify/ui-react": "^4.4.3",
    "@fontsource/inter": "^4.5.15",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.8",
    "@tanstack/react-query": "^4.28.0",
    "@vanilla-extract/css": "^1.11.0",
    "gboost-ui": "^0.33.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.32",
    "@types/react-dom": "^18.0.11",
    "@vanilla-extract/esbuild-plugin": "^2.2.2",
    "@vanilla-extract/vite-plugin": "^3.8.0",
    "@vitejs/plugin-react": "^3.1.0",
    "aws-amplify": "5.0.23",
    "eslint": "^8.37.0",
    "eslint-define-config": "^1.17.0",
    "typescript": "^4.9.5",
    "vite": "^4.2.1",
    "vite-plugin-html": "^3.2.0",
    "vite-tsconfig-paths": "^4.0.7",
    "vitest": "^0.29.8"
  }
}