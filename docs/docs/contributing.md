# Contributing

First clone the repository: `git clone https://github.com/awslabs/green-boost.git` and install dependencies: `pnpm i`.

## Developing Libraries

To develop `gboost-ui` or `gboost-infra` or `gboost-common` in your Green Boost application repository (created with `gboost create`), run `pnpm add ../path/to/gboost/packages/gboost-*` replacing the path with the path to wherever the package is locally. This will change your package.json.

Instructions below allow you to edit .ts files and test out your changes without having to compile to .js each time you make a change.

### gboost-ui

After running `pnpm add ../path/to/gboost/packages/gboost-ui` in your GB app, you'll need to restart the Vite dev server.

For any library used in `gboost-ui` and the consuming package (ui folder), you'll want to add that library to Vite's [resolve.dedupe](https://vitejs.dev/config/#resolve-dedupe) configuration parameter. See an explanation [here](https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/). Here is an inexhaustive list: `["aws-amplify", "@aws-amplify/ui-react", "graphql", "graphql-tag", "react", "react-dom", "react-icons", "react-router-dom"]`

### gboost

To develop `gboost` locally, run `pnpm dlx ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts` or you can globally install ts-node with `pnpm add -g ts-node` and then run `ts-node --esm ../path/to/green-boost/packages/gboost/src/index.ts`

## Commit Workflow

1. Create a feature branch. Please use a descriptive name like `feat-description` or `fix-description` or `refactor-description` etc.
1. Add feature, fix bug, refactor, etc.
1. Create changeset with: `pnpm changeset` in root of repo. Answer prompts, typically you'll be creating a minor change
1. Stage changes _including_ changeset file (i.e. `git add -A`)
1. Commit changes. Husky git commits should trigger lint-staged to run validating your staged files
1. Push branch and create a PR into main ensuring status checks run successfully