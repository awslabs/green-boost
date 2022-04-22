# Contributing

First clone the repository: `git clone https://github.com/awslabs/green-boost.git` and install dependencies: `pnpm i`.

## Developing Libraries

To develop `gboost-ui` or `gboost-infra` or `gboost-common` in your Green Boost application repository (created with `gboost create`), run `pnpm add ../path/to/gboost/packages/gboost-*` replacing the path with the path to wherever the package is locally. This will change your package.json.

Instructions below allow you to edit .ts files and test out your changes without having to compile to .js each time you make a change.

### gboost-ui

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

export default defineConfig(({ mode }) => {
  // ...
  return {
    plugins: [
      // ...
      reactJsOrJsx({ importerRegExpTest: /green-boost/ }),
    ],
    //...
  };
});
```

If you run into issues with duplicate node_modules being resolved, check out [this](https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/) article and look at Vite's `dedupe` config but you shouldn't need to.

### gboost

To develop `gboost` locally, run `pnpm dlx ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts` or you can globally install ts-node with `pnpm add -g ts-node` and then run `ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts`

## Commit Workflow

1. Create a feature branch. Please use a descriptive name like `feat-description` or `fix-description` or `refactor-description` etc.
1. Add feature, fix bug, refactor, etc.
1. Create changeset with: `pnpm changeset` in root of repo. Answer prompts, typically you'll be creating a minor change
1. Stage changes _including_ changeset file (i.e. `git add -A`)
1. Commit changes. Husky git commits should trigger lint-staged to run validating your staged files
1. Push branch and create a PR into main ensuring status checks run successfully