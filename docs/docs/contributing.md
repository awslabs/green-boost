# Contributing

First clone the repository: `git clone https://github.com/awslabs/green-boost.git` and install dependencies: `pnpm i`.

## Developing and Testing Libraries

To develop `gboost-ui` or `gboost-infra` or `gboost-common` in your Green Boost application repository (created with `gboost create`), run `pnpm add ../path/to/gboost/packages/gboost-*` replacing the path with the path to wherever the package is locally. This will change your package.json.

Instructions below allow you to edit .ts files and test out your changes without having to compile to .js each time you make a change.

### gboost-ui

After running `pnpm add ../path/to/gboost/packages/gboost-ui` in your GB app ui folder, you'll need to restart the Vite dev server.

For any library used in `gboost-ui` and the consuming package (ui folder), you'll want to add that library to Vite's [resolve.dedupe](https://vitejs.dev/config/#resolve-dedupe) configuration parameter. See an explanation [here](https://blog.maximeheckel.com/posts/duplicate-dependencies-npm-link/). Here is an inexhaustive list: `["aws-amplify", "@aws-amplify/ui-react", "graphql", "graphql-tag", "react", "react-dom", "react-icons", "react-router-dom", "@vanilla-extract/css"]`

### gboost

Install `vite-node` globally with `pnpm add -g vite-node`. Then you can run the CLI source (TS files) with: `vite-node --options.deps.inline="@aws-sdk/util-user-agent-node" ../path/to/green-boost/packages/gboost/src/index.ts -- <command>`. You can remove `--options.deps.inline="@aws-sdk/util-user-agent-node"` once [this issue](https://github.com/aws/aws-sdk-js-v3/issues/3622) is resolved.

## gboost-infra

After running `pnpm add ../path/to/gboost/packages/gboost-infra` in your GB app infra folder you'll have 2 instances of `aws-cdk-lib` and `cdk-nag`. One in your project and one in the green-boost repository. This causes an issue for `cdk-nag` because it uses `instanceof` comparisons on classes to conditionally check if resources adhere to requirements. See more [here](https://github.com/cdklabs/cdk-nag/issues/1219). To get around this, we'll use Vite's `resolve.dedupe` [configuration feature](https://vitejs.dev/config/shared-options.html#resolve-dedupe). Steps:
- In infra folder run: `pnpm add -D vite vite-node`
- Add vite.config.ts
```ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    dedupe: ["aws-cdk-lib", "cdk-nag"],
  },
});
```
- Change cdk.json#app to `"/path/to/your/app/infra/node_modules/.bin/vite-node src/local-app.ts"`
- `cdk synth "**"`. Now only 1 version of those libraries will be used when synthesizing your app.

Note: you'll need to run `pnpm build` within green-boost/packages/gboost-infra if using constructs that rely on built code like custom resources.

## Commit Workflow

1. Create a feature branch. Please use a descriptive name like `feat-description` or `fix-description` or `refactor-description` etc.
1. Add feature, fix bug, refactor, etc.
1. Create changeset with: `pnpm changeset` in root of repo. Answer prompts, typically you'll be creating a minor change
1. Stage changes _including_ changeset file (i.e. `git add -A`)
1. Commit changes. Husky git commits should trigger lint-staged to run validating your staged files
1. Push branch and create a PR into main ensuring status checks run successfully

## Update Dependencies
GB dependencies should be updated regularly. To update all patch and minor NPM versions, run `pnpm -r up -i`. This will launch an interactive CLI UI that allows you to pick which dependencies you want to updated. You can type `a` to update them all. For patch and minor version updated, you *should* be safe to do this.

You'll also want to check for major package upgrades but tread cautiously as these new versions contain breaking changes that may or may not break GB. For major version upgrades run `pnpm -r up -i --latest`. For any major upgrades, make sure to check out the realease notes or changelog for the package on GitHub.

## Fix Audit Issues
On each PR, `pnpm audit` is used to detect [CVEs](https://www.redhat.com/en/topics/security/what-is-cve). The GitHub Actions Workflow will fail if any CVEs >= moderate severity are found by running the command `pnpm audit --audit-level moderate`. If the dependency is a direct dependency of your project, you should try to [update dependencies](#update-dependencies). You can learn why a dependency is in your project (dependency hierarchy) with `pnpm why <package-name>`. If the dependency is a transitive dependency (dependency of dependency), you'll need to use PNPM's [pnpm.overrides feature](https://pnpm.io/package_json#pnpmoverrides) by adding to the `package.json#pnpm.overrides` object a key/value pair like: `"<package-name>@<vulnerable-version>": "<patched-version>"`. Then run `pnpm i` to update your dependencies.

Periodically, `pnpm.overrides` should be cleaned up as libraries overtime will update to patched version of packages.

If there is no patched version of the library and you can safely ignore the CVE, you can add it to `pnpm.auditConfig.ignoreCves`.