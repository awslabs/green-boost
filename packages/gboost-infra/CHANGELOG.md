# gboost-infra

## 0.8.0

### Minor Changes

- [#107](https://github.com/awslabs/green-boost/pull/107) [`6ca99dc`](https://github.com/awslabs/green-boost/commit/6ca99dc9ccc9f1c2d406ee1406bdf65618fa6a67) Thanks [@bestickley](https://github.com/bestickley)! - Update UserBase constructs

### Patch Changes

- [#107](https://github.com/awslabs/green-boost/pull/107) [`6ca99dc`](https://github.com/awslabs/green-boost/commit/6ca99dc9ccc9f1c2d406ee1406bdf65618fa6a67) Thanks [@bestickley](https://github.com/bestickley)! - Add default typescript lambda power tools env vars to Function construct

## 0.7.0

### Minor Changes

- [#103](https://github.com/awslabs/green-boost/pull/103) [`8992eae`](https://github.com/awslabs/green-boost/commit/8992eae77fe590b0a00ae0723d3b30d5baac180a) Thanks [@bestickley](https://github.com/bestickley)! - Add GovCloudCompat aspect

## 0.6.2

### Patch Changes

- [#99](https://github.com/awslabs/green-boost/pull/99) [`f7e1ffd`](https://github.com/awslabs/green-boost/commit/f7e1ffd0ad28a41f364de1bda90bb650e42049c4) Thanks [@bestickley](https://github.com/bestickley)! - UserBase's L2 construct props should be Partial

## 0.6.1

### Patch Changes

- [#97](https://github.com/awslabs/green-boost/pull/97) [`7f9c88a`](https://github.com/awslabs/green-boost/commit/7f9c88a7aff51025dde2a827cb300858528ab485) Thanks [@bestickley](https://github.com/bestickley)! - Fix package path reference in UserBase

## 0.6.0

### Minor Changes

- [#95](https://github.com/awslabs/green-boost/pull/95) [`4491774`](https://github.com/awslabs/green-boost/commit/4491774ad7dd8aee96d707cba21f543226facd5e) Thanks [@bestickley](https://github.com/bestickley)! - Add OidcUserBase construct

### Patch Changes

- [#95](https://github.com/awslabs/green-boost/pull/95) [`4491774`](https://github.com/awslabs/green-boost/commit/4491774ad7dd8aee96d707cba21f543226facd5e) Thanks [@bestickley](https://github.com/bestickley)! - Accept all CognitoUserPool attributes in UserBase

## 0.5.4

### Patch Changes

- [`84b5735`](https://github.com/awslabs/green-boost/commit/84b573582a3758b97764326fbb391105f11c92d8) Thanks [@bestickley](https://github.com/bestickley)! - Suppress cdk-nag on CDKBucketDeployment not using latest Lambda runtime

## 0.5.3

### Patch Changes

- [`245721f`](https://github.com/awslabs/green-boost/commit/245721ff05cf1b1ee37e31c5ade6358fa9b1b0e7) Thanks [@bestickley](https://github.com/bestickley)! - Correctly suppress cdk-nag error for iam policy wildcard for appsync to invoke any lambda

## 0.5.2

### Patch Changes

- [`2c3c821`](https://github.com/awslabs/green-boost/commit/2c3c821c08b0e9378fa16cc6e744566e12fa6245) Thanks [@bestickley](https://github.com/bestickley)! - Update Function construct to latest Node.js version. Add cdk-nag suppression for LogRetention policies

## 0.5.1

### Patch Changes

- [`0b3c98c`](https://github.com/awslabs/green-boost/commit/0b3c98c9e584ab8d92bcb7ca72a228d470c36608) Thanks [@bestickley](https://github.com/bestickley)! - Include CloudFront function source file

## 0.5.0

### Minor Changes

- [#88](https://github.com/awslabs/green-boost/pull/88) [`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7) Thanks [@bestickley](https://github.com/bestickley)! - Refactor UserManagement function to use gboost-common interface. Change email_verified to boolean
  Fix field name which is sent to CognitoListUser API for filtering

### Patch Changes

- [#88](https://github.com/awslabs/green-boost/pull/88) [`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7) Thanks [@bestickley](https://github.com/bestickley)! - Set email_verified to true when admin creates user

* [#88](https://github.com/awslabs/green-boost/pull/88) [`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

* Updated dependencies [[`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7), [`9561726`](https://github.com/awslabs/green-boost/commit/95617262a1e017563676a07a7b4adb1f605275c7)]:
  - gboost-common@0.6.0

## 0.4.0

### Minor Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Add GraphQLApi construct with nag suppression

* [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Rename suppressAwsManagedConstructs to SuppressOkNags

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Use CloudFront function instead of custom error responses to redirect requests to SPA's index.html

### Patch Changes

- [#70](https://github.com/awslabs/green-boost/pull/70) [`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

- Updated dependencies [[`230f6f2`](https://github.com/awslabs/green-boost/commit/230f6f252679d0d748f627cd66c7a025e7f29aa0)]:
  - gboost-common@0.5.1

## 0.3.9

### Patch Changes

- Updated dependencies [[`fe28be5`](https://github.com/awslabs/green-boost/commit/fe28be52ca951aeb3ef6aeea364af32237998f7b)]:
  - gboost-common@0.5.0

## 0.3.8

### Patch Changes

- [#52](https://github.com/awslabs/green-boost/pull/52) [`f3bbfbe`](https://github.com/awslabs/green-boost/commit/f3bbfbeeac6343476dfc9a389539928b47f66bd2) Thanks [@bestickley](https://github.com/bestickley)! - Fix cdk-nag error on StaticSite and AppSync resolver issue for UserManagement

- Updated dependencies [[`f3bbfbe`](https://github.com/awslabs/green-boost/commit/f3bbfbeeac6343476dfc9a389539928b47f66bd2)]:
  - gboost-common@0.4.0

## 0.3.7

### Patch Changes

- [#23](https://github.com/awslabs/green-boost/pull/23) [`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29) Thanks [@bestickley](https://github.com/bestickley)! - Fix main in package.json

- Updated dependencies [[`b8dd9c0`](https://github.com/awslabs/green-boost/commit/b8dd9c094bbe40cf798df2016874ed1a79016b29)]:
  - gboost-common@0.3.3

## 0.3.6

### Patch Changes

- [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Improve package.json's

* [#21](https://github.com/awslabs/green-boost/pull/21) [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e) Thanks [@bestickley](https://github.com/bestickley)! - Update deps

* Updated dependencies [[`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e), [`4a05c2f`](https://github.com/awslabs/green-boost/commit/4a05c2fb7934b0f7642607a74855d1752576314e)]:
  - gboost-common@0.3.2

## 0.3.5

### Patch Changes

- [#14](https://github.com/awslabs/green-boost/pull/14) [`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e) Thanks [@bestickley](https://github.com/bestickley)! - Add package.json#main

- Updated dependencies [[`5e2c868`](https://github.com/awslabs/green-boost/commit/5e2c868757eb0b3927bf9824ca025389f0bf580e)]:
  - gboost-common@0.3.1

## 0.3.4

### Patch Changes

- [`20fe0e5`](https://github.com/awslabs/green-boost/commit/20fe0e5b42b61a0c0e9ca9e160b64715c99e05ce) Thanks [@bestickley](https://github.com/bestickley)! - Fix cdk-nags on static site

## 0.3.3

### Patch Changes

- [`dbf0cd1`](https://github.com/awslabs/green-boost/commit/dbf0cd1889d07ccf8ba8171dc0f99eb90d506a67) Thanks [@bestickley](https://github.com/bestickley)! - Fix duplicate construct name in StaticSite

## 0.3.2

### Patch Changes

- [`c450aa7`](https://github.com/awslabs/green-boost/commit/c450aa748013a3ef1291ce9149d5cc8f52ef7727) Thanks [@bestickley](https://github.com/bestickley)! - Resolve cdk-nag errors

* [`6003eda`](https://github.com/awslabs/green-boost/commit/6003eda64f2bbc9b558f9976831aca25cb8b0d0e) Thanks [@bestickley](https://github.com/bestickley)! - Fix double resolvers being created

## 0.3.1

### Patch Changes

- [`dd22fb4`](https://github.com/awslabs/green-boost/commit/dd22fb4e7d25b8f26a02572b58100dfde4b3992c) Thanks [@bestickley](https://github.com/bestickley)! - Suppress AWS managed CDK constructs

* [`d054d49`](https://github.com/awslabs/green-boost/commit/d054d49367e001a873cf1263b64b2cef480d4ffb) Thanks [@bestickley](https://github.com/bestickley)! - Fix user management api resolvers

## 0.3.0

### Minor Changes

- [`940421c`](https://github.com/awslabs/green-boost/commit/940421c19ea4b71c1ee0a3fbbb667a2d9e437ad2) Thanks [@bestickley](https://github.com/bestickley)! - Fix types by exporting from index barrel file

### Patch Changes

- Updated dependencies [[`940421c`](https://github.com/awslabs/green-boost/commit/940421c19ea4b71c1ee0a3fbbb667a2d9e437ad2)]:
  - gboost-common@0.3.0

## 0.2.3

### Patch Changes

- [`c126d8b`](https://github.com/awslabs/green-boost/commit/c126d8bd184420f4e5861bd4b3d314a2c865bf5f) Thanks [@bestickley](https://github.com/bestickley)! - Update typesVersions

* [`54ffb33`](https://github.com/awslabs/green-boost/commit/54ffb33bb50f408cc34a2a59e01f042e348a260a) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

- [`c126d8b`](https://github.com/awslabs/green-boost/commit/c126d8bd184420f4e5861bd4b3d314a2c865bf5f) Thanks [@bestickley](https://github.com/bestickley)! - Add cdk-nag suppressions

- Updated dependencies [[`c126d8b`](https://github.com/awslabs/green-boost/commit/c126d8bd184420f4e5861bd4b3d314a2c865bf5f), [`54ffb33`](https://github.com/awslabs/green-boost/commit/54ffb33bb50f408cc34a2a59e01f042e348a260a)]:
  - gboost-common@0.2.2

## 0.2.2

### Patch Changes

- [`1b3e580`](https://github.com/awslabs/green-boost/commit/1b3e5808533cc0a27b970a0ab01ba080d1efad12) Thanks [@bestickley](https://github.com/bestickley)! - Add build script to include vtl, reference correct file ext for lambda entry points, correct gql api schema creation with user data source

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
