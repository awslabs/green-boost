# Contributing

Instructions below allow you to edit .ts files and test out your changes without having to compile to .js each time you make a change.

First clone the repository and instal dependencies with `pnpm i`.

To develop `gboost-ui` or `gboost-infra` or `gboost-common`, in your Green Boost application repository (created with `gboost create`), run `pnpm add ../path/to/gboost/packages/gboost-*` replacing the path with the path to wherever the package is locally.

For `gboost-ui`, you'll need to add this plugin in your vite.config.ts
```ts
import type { Plugin } from "vite";

function reactJsOrJsx({
  importerRegExpTest,
}: {
  importerRegExpTest: RegExp;
}): Plugin {
  return {
    name: "react-js-or-jsx",
    async resolveId(id: string, importer: string) {
      if (importerRegExpTest.test(importer)) {
        let resolved = await this.resolve(id, importer, {
          skipSelf: true,
        });
        if (!resolved) {
          resolved = await this.resolve(id + "x", importer, {
            skipSelf: true,
          });
        }
        return resolved;
      }
    },
  };
}
```

If you run into issues with duplicate node_modules being resolved, check out [this](https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/) article and look at Vite's `dedupe` config but you shouldn't need to.

To develop `gboost` locally, run `pnpm dlx ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts` or you can globally install ts-node with `pnpm add -g ts-node` and then run `ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts`