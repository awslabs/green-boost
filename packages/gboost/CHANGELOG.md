# gboost

## 0.18.0

### Minor Changes

- Update dependencies

## 0.17.0

### Minor Changes

- Update dependencies

## 0.16.2

### Patch Changes

- [#203](https://github.com/awslabs/green-boost/pull/203) [`ccf0b85`](https://github.com/awslabs/green-boost/commit/ccf0b857d984753c12e557a4d963e127c486b946) Thanks [@jwhigg](https://github.com/jwhigg)! - Use `ts-node` in templates infra/ folder instead of vite-node to reduce ESM errors. ts-node is more forgiving. Make ts-node path dynamic to resolve windows/linux issues.

## 0.16.1

### Patch Changes

- [#198](https://github.com/awslabs/green-boost/pull/198) [`f22679d`](https://github.com/awslabs/green-boost/commit/f22679dbaeca891af733cd29d66348eb1bb3d58e) Thanks [@bestickley](https://github.com/bestickley)! - Update "gboost-ui/smart-fields" import for templates

## 0.16.0

### Minor Changes

- Update dependencies

## 0.15.0

### Minor Changes

- Update dependencies

## 0.14.0

### Minor Changes

- Update dependencies

## 0.13.1

### Patch Changes

- [#190](https://github.com/awslabs/green-boost/pull/190) [`cd92554`](https://github.com/awslabs/green-boost/commit/cd92554e79a248e222224753576e27fd44428619) Thanks [@bestickley](https://github.com/bestickley)! - Fix `gboost create` CRUD App with PostgreSQL template deployment order

## 0.13.0

### Minor Changes

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Refactor `StageConfig` to centralize logic into getters

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Add `gboost create` template for CRUD App with Aurora PostgreSQL Serverless

### Patch Changes

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

- Updated dependencies [[`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e)]:
  - gboost-common@0.11.1

## 0.12.3

### Patch Changes

- Updated dependencies [[`2161419`](https://github.com/awslabs/green-boost/commit/21614193f619eecda922ea60bab82e5de15210f9)]:
  - gboost-common@0.11.0

## 0.12.2

### Patch Changes

- [`254e1f4`](https://github.com/awslabs/green-boost/commit/254e1f49f528c94d75e815b9dc9974742988cf22) Thanks [@bestickley](https://github.com/bestickley)! - Include ui/.env in gboost templates

## 0.12.1

### Patch Changes

- [#181](https://github.com/awslabs/green-boost/pull/181) [`dcff897`](https://github.com/awslabs/green-boost/commit/dcff8975e47b7d1c87f41bb3e7c25dabbdf5813a) Thanks [@bestickley](https://github.com/bestickley)! - Fix gboost CLI build

## 0.12.0

### Minor Changes

- [#179](https://github.com/awslabs/green-boost/pull/179) [`62b8f67`](https://github.com/awslabs/green-boost/commit/62b8f677bc8c5810a990c0945d51687e8d5e6b8a) Thanks [@bestickley](https://github.com/bestickley)! - Add CRUD with DynamoDB template to gboost create

### Patch Changes

- [#179](https://github.com/awslabs/green-boost/pull/179) [`62b8f67`](https://github.com/awslabs/green-boost/commit/62b8f677bc8c5810a990c0945d51687e8d5e6b8a) Thanks [@bestickley](https://github.com/bestickley)! - Add utility packages for all templates

## 0.11.0

### Minor Changes

- [`0386b44`](https://github.com/awslabs/green-boost/commit/0386b44f30a80e3d62a2f5445a24162648e10fcb) Thanks [@bestickley](https://github.com/bestickley)! - Update templates to use new SuppressNags aspect

### Patch Changes

- Updated dependencies [[`0386b44`](https://github.com/awslabs/green-boost/commit/0386b44f30a80e3d62a2f5445a24162648e10fcb)]:
  - gboost-common@0.10.0

## 0.10.1

### Patch Changes

- [`40c676b`](https://github.com/awslabs/green-boost/commit/40c676b371b28656e4aa2088fd6fe07ff473ed1b) Thanks [@bestickley](https://github.com/bestickley)! - Fix gboost CLI to include necessary dependencies (@commander-js/extra-typings)

## 0.10.0

### Minor Changes

- [#173](https://github.com/awslabs/green-boost/pull/173) [`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314) Thanks [@bestickley](https://github.com/bestickley)! - Update packages to use Node.js native ESM and update dependencies

- [#173](https://github.com/awslabs/green-boost/pull/173) [`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314) Thanks [@bestickley](https://github.com/bestickley)! - Update `gboost create` to use static templates instead of ejs templates with conditional rendering logic. Will make adding additional template easier and less likely to break previous template

### Patch Changes

- Updated dependencies [[`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314)]:
  - gboost-common@0.9.0

## 0.9.0

### Minor Changes

- [#139](https://github.com/awslabs/green-boost/pull/139) [`f394ef3`](https://github.com/awslabs/green-boost/commit/f394ef39e0e7807152d3110f31353ba9554c3ca3) Thanks [@bestickley](https://github.com/bestickley)! - Update deps

### Patch Changes

- Updated dependencies [[`f394ef3`](https://github.com/awslabs/green-boost/commit/f394ef39e0e7807152d3110f31353ba9554c3ca3)]:
  - gboost-common@0.8.0

## 0.8.1

### Patch Changes

- [#117](https://github.com/awslabs/green-boost/pull/117) [`fcb3c96`](https://github.com/awslabs/green-boost/commit/fcb3c96d0a2da90f71dbacf7775062ddd5e2d0c9) Thanks [@bestickley](https://github.com/bestickley)! - Fix run-fn by passing event in quotes when object

## 0.8.0

### Minor Changes

- [#113](https://github.com/awslabs/green-boost/pull/113) [`ffc8d7e`](https://github.com/awslabs/green-boost/commit/ffc8d7ec3480f614d86ff8f4dfa4a8c7d7487251) Thanks [@bestickley](https://github.com/bestickley)! - Add ability to debug run-fn

## 0.7.3

### Patch Changes

- [#111](https://github.com/awslabs/green-boost/pull/111) [`fa7b2e2`](https://github.com/awslabs/green-boost/commit/fa7b2e2608db506edbb709868b86dfee86284ebd) Thanks [@bestickley](https://github.com/bestickley)! - Init git repository to fix husky errors

* [#111](https://github.com/awslabs/green-boost/pull/111) [`fa7b2e2`](https://github.com/awslabs/green-boost/commit/fa7b2e2608db506edbb709868b86dfee86284ebd) Thanks [@bestickley](https://github.com/bestickley)! - Fix gboost create ui/public images

- [#111](https://github.com/awslabs/green-boost/pull/111) [`fa7b2e2`](https://github.com/awslabs/green-boost/commit/fa7b2e2608db506edbb709868b86dfee86284ebd) Thanks [@bestickley](https://github.com/bestickley)! - Fix run-fn command to allow TS files

## 0.7.2

### Patch Changes

- Updated dependencies [[`4865d9b`](https://github.com/awslabs/green-boost/commit/4865d9b876d0d47713918ce307f6dc913fa0d6c6)]:
  - gboost-common@0.7.0

## 0.7.1

### Patch Changes

- [`8a9539f`](https://github.com/awslabs/green-boost/commit/8a9539faef93a1040b1d86239e0ceca3bddaaed9) Thanks [@bestickley](https://github.com/bestickley)! - Fix gboost CLI by excluding tests from tsc to maintain entry point

## 0.7.0

### Minor Changes

- [#107](https://github.com/awslabs/green-boost/pull/107) [`6ca99dc`](https://github.com/awslabs/green-boost/commit/6ca99dc9ccc9f1c2d406ee1406bdf65618fa6a67) Thanks [@bestickley](https://github.com/bestickley)! - Add gboost run-fn command

* [#107](https://github.com/awslabs/green-boost/pull/107) [`6ca99dc`](https://github.com/awslabs/green-boost/commit/6ca99dc9ccc9f1c2d406ee1406bdf65618fa6a67) Thanks [@bestickley](https://github.com/bestickley)! - Exchange hygen dependency for ejs and prompts. Fix windows `gboost create` issue. `gboost create` now installs node_modules and lints final repo for user

## 0.6.1

### Patch Changes

- [#101](https://github.com/awslabs/green-boost/pull/101) [`0fb886e`](https://github.com/awslabs/green-boost/commit/0fb886e0a3ecaef120210f5b7b61e3c38aea4b26) Thanks [@bestickley](https://github.com/bestickley)! - Use pnpm.peerDependencyRules instead of .npmrc to fix peer deps errors

## 0.6.0

### Minor Changes

- [#95](https://github.com/awslabs/green-boost/pull/95) [`4491774`](https://github.com/awslabs/green-boost/commit/4491774ad7dd8aee96d707cba21f543226facd5e) Thanks [@bestickley](https://github.com/bestickley)! - Add --frontend-only and --backend-only CLI flags for deploy-dev command

## 0.5.4

### Patch Changes

- [`92925dc`](https://github.com/awslabs/green-boost/commit/92925dcecd1b02d7a40ad5bb564e49e6772d674b) Thanks [@bestickley](https://github.com/bestickley)! - Add SuppressOkNags to front-end-stack in default template

## 0.5.3

### Patch Changes

- [`836772b`](https://github.com/awslabs/green-boost/commit/836772b25366ceafab6d32b61910d93f0c09529b) Thanks [@bestickley](https://github.com/bestickley)! - Add SuppressOkNags to backend stack template

## 0.5.2

### Patch Changes

- [`1edd92b`](https://github.com/awslabs/green-boost/commit/1edd92bfdbced74c3c96febefe2d0d435f2efa6b) Thanks [@bestickley](https://github.com/bestickley)! - Add .npmrc so pnpm doesn't fail on peer deps

## 0.5.1

### Patch Changes

- [#88](https://github.com/awslabs/green-boost/pull/88) [`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

## 0.5.0

### Minor Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Add destroy-dev command

### Patch Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

* [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Update templates

## 0.4.1

### Patch Changes

- [#66](https://github.com/awslabs/green-boost/pull/66) [`97e96aa`](https://github.com/awslabs/green-boost/commit/97e96aa5a3b7627bcfb67e8d54458c555a7185dc) Thanks [@bestickley](https://github.com/bestickley)! - - Require passing `user`, `signOut` to Layout component for added flexibility
  - Add `AccountMenu` and `AccountSidebar` to Layout component for greater customization

## 0.4.0

### Minor Changes

- [#52](https://github.com/awslabs/green-boost/pull/52) [`f3bbfbe`](https://github.com/awslabs/green-boost/commit/f3bbfbeeac6343476dfc9a389539928b47f66bd2) Thanks [@bestickley](https://github.com/bestickley)! - Add default authorization question and pre-commit hooks

## 0.3.10

### Patch Changes

- [`26b0251`](https://github.com/awslabs/green-boost/commit/26b0251ed4491b1eecc56bddb42bcd4b4ffc8128) Thanks [@bestickley](https://github.com/bestickley)! - Add title prop to Auth and Layout

## 0.3.9

### Patch Changes

- [#23](https://github.com/awslabs/green-boost/pull/23) [`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29) Thanks [@bestickley](https://github.com/bestickley)! - Fix main in package.json

## 0.3.8

### Patch Changes

- [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Improve package.json's

* [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Update deps

## 0.3.7

### Patch Changes

- [#14](https://github.com/awslabs/green-boost/pull/14) [`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e) Thanks [@bestickley](https://github.com/bestickley)! - Add package.json#main

## 0.3.6

### Patch Changes

- [`c450aa7`](https://github.com/awslabs/green-boost/commit/c450aa748013a3ef1291ce9149d5cc8f52ef7727) Thanks [@bestickley](https://github.com/bestickley)! - Resolve cdk-nag errors

## 0.3.5

### Patch Changes

- [`2f755c9`](https://github.com/awslabs/green-boost/commit/2f755c9fb96dad555f10af3ff27ecc48915f367a) Thanks [@bestickley](https://github.com/bestickley)! - Fix reference to web assets for static site

* [`dd22fb4`](https://github.com/awslabs/green-boost/commit/dd22fb4e7d25b8f26a02572b58100dfde4b3992c) Thanks [@bestickley](https://github.com/bestickley)! - Suppress AWS managed CDK constructs

## 0.3.4

### Patch Changes

- [`940421c`](https://github.com/awslabs/green-boost/commit/940421c19ea4b71c1ee0a3fbbb667a2d9e437ad2) Thanks [@bestickley](https://github.com/bestickley)! - Fix types by exporting from index barrel file

## 0.3.3

### Patch Changes

- [`54ffb33`](https://github.com/awslabs/green-boost/commit/54ffb33bb50f408cc34a2a59e01f042e348a260a) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

## 0.3.2

### Patch Changes

- [`1b3e580`](https://github.com/awslabs/green-boost/commit/1b3e5808533cc0a27b970a0ab01ba080d1efad12) Thanks [@bestickley](https://github.com/bestickley)! - Fix typo in \_templates

## 0.3.1

### Patch Changes

- [`cbcbc3b`](https://github.com/awslabs/green-boost/commit/cbcbc3b89b7e25473e8f5e487da5b38fc1ba9e33) Thanks [@bestickley](https://github.com/bestickley)! - Fix README badges

* [`cbcbc3b`](https://github.com/awslabs/green-boost/commit/cbcbc3b89b7e25473e8f5e487da5b38fc1ba9e33) Thanks [@bestickley](https://github.com/bestickley)! - Correct package version references to initial release

## 0.3.0

### Minor Changes

- [`c7c6992`](https://github.com/awslabs/green-boost/commit/c7c6992f31611d46db7e4115d34ee1219b6401ea) Thanks [@bestickley](https://github.com/bestickley)! - - Change top level back-end folder to infra
  - Change top level front-end folder to ui
  - Update to new package names: gboost-common, gboost-infra, gboost-ui

## 0.2.0

### Minor Changes

- [`9f9fce8`](https://github.com/awslabs/green-boost/commit/9f9fce83a3e8c75df52af3c3a58c3b0993b84a1d) Thanks [@bestickley](https://github.com/bestickley)! - initial release
