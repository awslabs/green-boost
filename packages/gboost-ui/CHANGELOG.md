# gboost-ui

## 0.16.0

### Minor Changes

- [#76](https://github.com/awslabs/green-boost/pull/76) [`dac8635`](https://github.com/awslabs/green-boost/commit/dac8635b359cfcfafd339feaedadf3661e2acfdb) Thanks [@bestickley](https://github.com/bestickley)! - Add refreshRef to QueryTable to allow manual refreshing

* [#76](https://github.com/awslabs/green-boost/pull/76) [`dac8635`](https://github.com/awslabs/green-boost/commit/dac8635b359cfcfafd339feaedadf3661e2acfdb) Thanks [@bestickley](https://github.com/bestickley)! - Add refresh button on QueryTable action bar

### Patch Changes

- [#76](https://github.com/awslabs/green-boost/pull/76) [`dac8635`](https://github.com/awslabs/green-boost/commit/dac8635b359cfcfafd339feaedadf3661e2acfdb) Thanks [@bestickley](https://github.com/bestickley)! - Auto select comparator if only one in QueryTable Filter

* [#76](https://github.com/awslabs/green-boost/pull/76) [`dac8635`](https://github.com/awslabs/green-boost/commit/dac8635b359cfcfafd339feaedadf3661e2acfdb) Thanks [@bestickley](https://github.com/bestickley)! - Fix margin between bottom of table and pagination

## 0.15.1

### Patch Changes

- [#74](https://github.com/awslabs/green-boost/pull/74) [`8d22360`](https://github.com/awslabs/green-boost/commit/8d22360febd85fafa20c94f609dfe7b71dd4d19c) Thanks [@bestickley](https://github.com/bestickley)! - Remove console.log from Pagination component

## 0.15.0

### Minor Changes

- [#72](https://github.com/awslabs/green-boost/pull/72) [`0738b57`](https://github.com/awslabs/green-boost/commit/0738b57d7139e1b96a922eb4f486d4c79a5e4959) Thanks [@bestickley](https://github.com/bestickley)! - Add ErrorBoundary component

* [#72](https://github.com/awslabs/green-boost/pull/72) [`0738b57`](https://github.com/awslabs/green-boost/commit/0738b57d7139e1b96a922eb4f486d4c79a5e4959) Thanks [@bestickley](https://github.com/bestickley)! - Update QueryTable pagination to stay at bottom of table even if no data

- [#72](https://github.com/awslabs/green-boost/pull/72) [`0738b57`](https://github.com/awslabs/green-boost/commit/0738b57d7139e1b96a922eb4f486d4c79a5e4959) Thanks [@bestickley](https://github.com/bestickley)! - Add props to control Dialog component

## 0.14.0

### Minor Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Add `FlowStepper` component

* [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Add ability to hide action bar and pagination for `QueryTable`

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Refactor `getErrorMessage`

### Patch Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

- Updated dependencies [[`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0)]:
  - gboost-common@0.5.1

## 0.13.0

### Minor Changes

- [#66](https://github.com/awslabs/green-boost/pull/66) [`97e96aa`](https://github.com/awslabs/green-boost/commit/97e96aa5a3b7627bcfb67e8d54458c555a7185dc) Thanks [@bestickley](https://github.com/bestickley)! - - Require passing `user`, `signOut` to Layout component for added flexibility
  - Add `AccountMenu` and `AccountSidebar` to Layout component for greater customization

## 0.12.0

### Minor Changes

- [#64](https://github.com/awslabs/green-boost/pull/64) [`fe28be5`](https://github.com/awslabs/green-boost/commit/fe28be52ca951aeb3ef6aeea364af32237998f7b) Thanks [@bestickley](https://github.com/bestickley)! - - Optional user prop for Layout
  - Authenticator updates TOTP issuer with title by default

### Patch Changes

- Updated dependencies [[`fe28be5`](https://github.com/awslabs/green-boost/commit/fe28be52ca951aeb3ef6aeea364af32237998f7b)]:
  - gboost-common@0.5.0

## 0.11.0

### Minor Changes

- [#62](https://github.com/awslabs/green-boost/pull/62) [`204658c`](https://github.com/awslabs/green-boost/commit/204658c9db3a9cde8823533fdcbdf030a130fbb6) Thanks [@bestickley](https://github.com/bestickley)! - Remove accountMenuBc and companyName props from Layout and headerBackgroundColor from QueryTable to force users to use radix colors system. Add footer and HeaderTitle prop to Layout

## 0.10.0

### Minor Changes

- [#54](https://github.com/awslabs/green-boost/pull/54) [`3bcbc1c`](https://github.com/awslabs/green-boost/commit/3bcbc1ca05ab183f79387026692bf605d3e4fc4e) Thanks [@bestickley](https://github.com/bestickley)! - Add select to QueryTable. Rename ActionMenu to ActionButton.

## 0.9.0

### Minor Changes

- [#52](https://github.com/awslabs/green-boost/pull/52) [`f3bbfbe`](https://github.com/awslabs/green-boost/commit/f3bbfbeeac6343476dfc9a389539928b47f66bd2) Thanks [@bestickley](https://github.com/bestickley)! - Use useAuthenticator hook in Layout

### Patch Changes

- Updated dependencies [[`f3bbfbe`](https://github.com/awslabs/green-boost/commit/f3bbfbeeac6343476dfc9a389539928b47f66bd2)]:
  - gboost-common@0.4.0

## 0.8.1

### Patch Changes

- [`2b6dbe2`](https://github.com/awslabs/green-boost/commit/2b6dbe2a503717802574d068894637ebf88b0377) Thanks [@bestickley](https://github.com/bestickley)! - Add second type generic to SmartTransferList to fix types

## 0.8.0

### Minor Changes

- [#49](https://github.com/awslabs/green-boost/pull/49) [`a104be1`](https://github.com/awslabs/green-boost/commit/a104be1751094c5376eaf49132d7384661b7ac8b) Thanks [@bestickley](https://github.com/bestickley)! - Add SmartInputs which integrate with react-hook-form. Add customizations to Layout and QueryTable.

## 0.7.1

### Patch Changes

- [`7fe60f2`](https://github.com/awslabs/green-boost/commit/7fe60f25579ccd9c480b70da69c8ec91c7b1ec92) Thanks [@bestickley](https://github.com/bestickley)! - Fix TransferListProps export

## 0.7.0

### Minor Changes

- [#45](https://github.com/awslabs/green-boost/pull/45) [`d10a8ac`](https://github.com/awslabs/green-boost/commit/d10a8ac6d8a01d7d0cbdf62595a4b41b06a162e6) Thanks [@bestickley](https://github.com/bestickley)! - Add TransferList with ability to filter

## 0.6.2

### Patch Changes

- [`b51d166`](https://github.com/awslabs/green-boost/commit/b51d166239a8e44db745f24704bea48673ea68a5) Thanks [@bestickley](https://github.com/bestickley)! - Don't access import.meta.env within gboost-ui

## 0.6.1

### Patch Changes

- [`4e26338`](https://github.com/awslabs/green-boost/commit/4e26338579f885df8f870f33f36b93f421ac8bab) Thanks [@bestickley](https://github.com/bestickley)! - Change imports from .jsx to .js

## 0.6.0

### Minor Changes

- [`1f982e9`](https://github.com/awslabs/green-boost/commit/1f982e9c777c8ebd71382226673d56037861262e) Thanks [@bestickley](https://github.com/bestickley)! - Add init{PageSize,Density,FiltersSorts} props

### Patch Changes

- [`65e2e22`](https://github.com/awslabs/green-boost/commit/65e2e226a5581c30a3e62fbf9129ee21235a2226) Thanks [@bestickley](https://github.com/bestickley)! - Use tsconfig's jsx: "react-jsx" instead of "preserve"

## 0.5.2

### Patch Changes

- [`6c67d8b`](https://github.com/awslabs/green-boost/commit/6c67d8bfded3a9cd0f4cc86b45a96a21b307949f) Thanks [@bestickley](https://github.com/bestickley)! - Remove unecessary peer deps

## 0.5.1

### Patch Changes

- [#23](https://github.com/awslabs/green-boost/pull/23) [`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29) Thanks [@bestickley](https://github.com/bestickley)! - Make all aws-amplify deps peerDependencies to fix Vite pre-bundling issue

* [#23](https://github.com/awslabs/green-boost/pull/23) [`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29) Thanks [@bestickley](https://github.com/bestickley)! - Fix main in package.json

* Updated dependencies [[`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29)]:
  - gboost-common@0.3.3

## 0.5.0

### Minor Changes

- [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Add QueryTable and Dialog components

### Patch Changes

- [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Improve package.json's

* [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Update deps

* Updated dependencies [[`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e), [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e)]:
  - gboost-common@0.3.2

## 0.4.0

### Minor Changes

- [#14](https://github.com/awslabs/green-boost/pull/14) [`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e) Thanks [@bestickley](https://github.com/bestickley)! - Add Notifications components and context provider

### Patch Changes

- [#15](https://github.com/awslabs/green-boost/pull/15) [`0b0f70c`](https://github.com/awslabs/green-boost/commit/0b0f70c8a7a0db24cf0efe3516d8b5ab5a55db87) Thanks [@bestickley](https://github.com/bestickley)! - Improve typings on Authenticator, Loading screen, bump @aws-amplify/ui-react

* [#14](https://github.com/awslabs/green-boost/pull/14) [`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e) Thanks [@bestickley](https://github.com/bestickley)! - Add package.json#main

* Updated dependencies [[`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e)]:
  - gboost-common@0.3.1

## 0.3.1

### Patch Changes

- [`ec1a0a6`](https://github.com/awslabs/green-boost/commit/ec1a0a61b19e58444d785de7cfd6747a8abf0611) Thanks [@bestickley](https://github.com/bestickley)! - Fix exports and types package.json config. Preserve jsx via tsc

## 0.3.0

### Minor Changes

- [`940421c`](https://github.com/awslabs/green-boost/commit/940421c19ea4b71c1ee0a3fbbb667a2d9e437ad2) Thanks [@bestickley](https://github.com/bestickley)! - Fix types by exporting from index barrel file

### Patch Changes

- Updated dependencies [[`940421c`](https://github.com/awslabs/green-boost/commit/940421c19ea4b71c1ee0a3fbbb667a2d9e437ad2)]:
  - gboost-common@0.3.0

## 0.2.2

### Patch Changes

- [`c126d8b`](https://github.com/awslabs/green-boost/commit/c126d8bd184420f4e5861bd4b3d314a2c865bf5f) Thanks [@bestickley](https://github.com/bestickley)! - Update typesVersions

* [`54ffb33`](https://github.com/awslabs/green-boost/commit/54ffb33bb50f408cc34a2a59e01f042e348a260a) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

* Updated dependencies [[`c126d8b`](https://github.com/awslabs/green-boost/commit/c126d8bd184420f4e5861bd4b3d314a2c865bf5f), [`54ffb33`](https://github.com/awslabs/green-boost/commit/54ffb33bb50f408cc34a2a59e01f042e348a260a)]:
  - gboost-common@0.2.2

## 0.2.1

### Patch Changes

- [`cbcbc3b`](https://github.com/awslabs/green-boost/commit/cbcbc3b89b7e25473e8f5e487da5b38fc1ba9e33) Thanks [@bestickley](https://github.com/bestickley)! - Fix README badges

- Updated dependencies [[`cbcbc3b`](https://github.com/awslabs/green-boost/commit/cbcbc3b89b7e25473e8f5e487da5b38fc1ba9e33)]:
  - gboost-common@0.2.1

## 0.2.0

### Minor Changes

- [`c7c6992`](https://github.com/awslabs/green-boost/commit/c7c6992f31611d46db7e4115d34ee1219b6401ea) Thanks [@bestickley](https://github.com/bestickley)! - Initial release

### Patch Changes

- Updated dependencies [[`c7c6992`](https://github.com/awslabs/green-boost/commit/c7c6992f31611d46db7e4115d34ee1219b6401ea)]:
  - gboost-common@0.2.0
