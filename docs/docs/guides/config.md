# Config

## config.ts
Every top level folder within a Green Boost app has a src/config.ts object. Centralizing your configuration values into one object can greatly simplify finding definitions of configuration. Additionally, you can utilize several features of JavaScript objects to customize how your configuration is accessed.

## Composing
If you have configuration values that build on top of each other you can use object getter functions to compose them.
```ts
export const config = {
  baseUrl: "https://example.com",
  get postsUrl() {
    return this.baseUrl + "/posts",
  },
  get commentsUrl() {
    return this.baseUrl + "/comments",
  }
}
```

## Environment Specific
Change config values dynamically based on your stage or environment
```ts
const appIds = {
  dev: "4h0u9i4kab3qjpd6a74qic7sbc",
  test: "5h0u9i4kab3qjpd6a74qic7sbc",
  prod: "6h0u9i4kab3qjpd6a74qic7sbc"
}
export const config = {
  get stage() {
    return process.env.STAGE || "dev";
  },
  get appId() {
    return appIds[this.stage];
  },
}
```

## Async
If you need to fetch a secret parameter but don't want to load the value unless used you can do:
```ts
export const config = {
  get secretValue() {
    // defined elesewhere
    return getSecretAsync({ secretId: "something" });
  }
}
```