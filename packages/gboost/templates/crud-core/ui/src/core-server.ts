// @ts-nocheck
// Purpose of this file to safeguard agaginst importing server code/configuration
// into client components. To do this, we restrict imports to @{{GB_APP_ID}}/core/server
// via ESLint but temporarily disable the rule for this file. Then we use
// "server-only" package which ensures this file is only imported in server components.
import "server-only"; // prevents server code from being bundled into client code
// eslint-disable-next-line no-restricted-imports
export * from "@{{GB_APP_ID}}/core/server";
