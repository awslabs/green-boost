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
    "@aws-amplify/ui-react": "^4.4.1",
    "@fontsource/inter": "^4.5.15",
    "@hookform/resolvers": "^2.9.11",
    "@{{GB_APP_ID}}/core": "workspace:^0.1.0",
    "@radix-ui/colors": "^0.1.8",
    "@stitches/react": "^1.2.8",
    "@tanstack/react-query": "^4.26.1",
    "@trpc/client": "^10.16.0",
    "@trpc/react-query": "^10.16.0",
    "@vanilla-extract/css": "^1.10.0",
    "clsx": "^1.2.1",
    "gboost-ui": "^0.32.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.43.5",
    "react-icons": "^4.8.0",
    "react-router-dom": "^6.9.0",
    "zod": "^3.21.4"
  },
  "devDependencies": {
    "@{{GB_APP_ID}}/eslint-config-react": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/tsconfig": "workspace:^0.1.0",
    "@{{GB_APP_ID}}/utils": "workspace:^0.1.0",
    "@trpc/server": "^10.16.0",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@vanilla-extract/vite-plugin": "^3.7.0",
    "@vitejs/plugin-react": "^3.1.0",
    "aws-amplify": "5.0.16",
    "eslint": "^8.36.0",
    "eslint-define-config": "^1.16.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.4",
    "vite-plugin-html": "^3.2.0",
    "vite-tsconfig-paths": "^4.0.5",
    "vitest": "^0.29.1"
  }
}