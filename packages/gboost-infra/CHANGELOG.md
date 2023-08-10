# gboost-infra

## 0.16.0

### Minor Changes

- [#223](https://github.com/awslabs/green-boost/pull/223) [`7af36c2`](https://github.com/awslabs/green-boost/commit/7af36c286852e66435335e33d941d51ed06587a5) Thanks [@bestickley](https://github.com/bestickley)! - Deprecate `UserManagement`, `UserBase`, and `OidcUserBase` because they're poor abstraction layers. User directory/pool infra is very custom and consuming developers will need to open source code to learn what's being abstracted. Recommend developers use AWS CDK's Cognito L3 constructs to setup user pools and identity providers if using Cognito and for user management developers can see `gboost create` auth template

- [#223](https://github.com/awslabs/green-boost/pull/223) [`7af36c2`](https://github.com/awslabs/green-boost/commit/7af36c286852e66435335e33d941d51ed06587a5) Thanks [@bestickley](https://github.com/bestickley)! - Upgrade to TS 5.0 and enforce stricter configuration

### Patch Changes

- Updated dependencies [[`7af36c2`](https://github.com/awslabs/green-boost/commit/7af36c286852e66435335e33d941d51ed06587a5)]:
  - gboost-common@0.12.0

## 0.15.3

### Patch Changes

- [#215](https://github.com/awslabs/green-boost/pull/215) [`485b177`](https://github.com/awslabs/green-boost/commit/485b17724713758616f59e4a6f0c6102f97cfe22) Thanks [@bestickley](https://github.com/bestickley)! - Fix `StaticSite`'s CloudFront Distribution's access to access logs bucket

## 0.15.2

### Patch Changes

- [#209](https://github.com/awslabs/green-boost/pull/209) [`1296bde`](https://github.com/awslabs/green-boost/commit/1296bdeac19ea0cdcc2453162448a4ff073d8da3) Thanks [@bestickley](https://github.com/bestickley)! - Fix `suppressAwsLambdaBasicExecutionRole` to handle empty `managedPolicyArn` array

## 0.15.1

### Patch Changes

- [#203](https://github.com/awslabs/green-boost/pull/203) [`ccf0b85`](https://github.com/awslabs/green-boost/commit/ccf0b857d984753c12e557a4d963e127c486b946) Thanks [@jwhigg](https://github.com/jwhigg)! - Update `StaticSite` to disable WAF by default. This resolves issue where deploying in non-us-east-1 regions fails as WAF for CloudFront must be deployed in us-east-1.

## 0.15.0

### Minor Changes

- [#192](https://github.com/awslabs/green-boost/pull/192) [`6afebd6`](https://github.com/awslabs/green-boost/commit/6afebd689781d97a658cfb8d3f6484f576d8d563) Thanks [@bestickley](https://github.com/bestickley)! - Move dependencies used in consuming application to peerDependencies

## 0.14.1

### Patch Changes

- [#190](https://github.com/awslabs/green-boost/pull/190) [`cd92554`](https://github.com/awslabs/green-boost/commit/cd92554e79a248e222224753576e27fd44428619) Thanks [@bestickley](https://github.com/bestickley)! - Fix `Bucket` to use `constructDefaultProps`

## 0.14.0

### Minor Changes

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Add `DbIamCluster` construct

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Add `Suppressions.CdkMonitoringConstructs` to `SuppressNags` aspect

### Patch Changes

- [#188](https://github.com/awslabs/green-boost/pull/188) [`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e) Thanks [@bestickley](https://github.com/bestickley)! - Update dependencies

- Updated dependencies [[`8605034`](https://github.com/awslabs/green-boost/commit/86050348f2cd022acbe433a33cae83f048a4283e)]:
  - gboost-common@0.11.1

## 0.13.2

### Patch Changes

- Updated dependencies [[`2161419`](https://github.com/awslabs/green-boost/commit/21614193f619eecda922ea60bab82e5de15210f9)]:
  - gboost-common@0.11.0

## 0.13.1

### Patch Changes

- [#179](https://github.com/awslabs/green-boost/pull/179) [`62b8f67`](https://github.com/awslabs/green-boost/commit/62b8f677bc8c5810a990c0945d51687e8d5e6b8a) Thanks [@bestickley](https://github.com/bestickley)! - Use construct default props in function and table

## 0.13.0

### Minor Changes

- [#176](https://github.com/awslabs/green-boost/pull/176) [`131200a`](https://github.com/awslabs/green-boost/commit/131200ad8354a30599a42833727e5e3815c80ea2) Thanks [@bestickley](https://github.com/bestickley)! - Change SuppressOkNags to SuppressNags and require user to pass in array of Suppression enums to specify which suppressions should be used. For previous behavior, use `new SuppressNags(Object.values(Supppression))`.

### Patch Changes

- Updated dependencies [[`0386b44`](https://github.com/awslabs/green-boost/commit/0386b44f30a80e3d62a2f5445a24162648e10fcb)]:
  - gboost-common@0.10.0

## 0.12.0

### Minor Changes

- [#173](https://github.com/awslabs/green-boost/pull/173) [`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314) Thanks [@bestickley](https://github.com/bestickley)! - Update packages to use Node.js native ESM and update dependencies

- [#173](https://github.com/awslabs/green-boost/pull/173) [`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314) Thanks [@bestickley](https://github.com/bestickley)! - - Update `StaticSite` construct with breaking changes. Please see new props.
  - Added `WebDeployment` construct to solve unresolved environment variables needed when building static sites.
  - Added `setConstructDefaultProps` for limitted constructs to make setting defaults easier

### Patch Changes

- Updated dependencies [[`3ca47ce`](https://github.com/awslabs/green-boost/commit/3ca47cec0b8e428782980f2dbba6cb02ac3b1314)]:
  - gboost-common@0.9.0

## 0.11.2

### Patch Changes

- [#170](https://github.com/awslabs/green-boost/pull/170) [`fe5b59a`](https://github.com/awslabs/green-boost/commit/fe5b59ac9ede4f1ae524d6c64906dc6235079e45) Thanks [@tom-dennis-aws](https://github.com/tom-dennis-aws)! - fixed build/lint issues

## 0.11.1

### Patch Changes

- [#143](https://github.com/awslabs/green-boost/pull/143) [`03d145c`](https://github.com/awslabs/green-boost/commit/03d145ca43e47c9d47701fecb96c92069fe8ea9c) Thanks [@bestickley](https://github.com/bestickley)! - Enable instantiation of multiple buckets in same construct by making access logs bucket's id based on parent bucket

## 0.11.0

### Minor Changes

- [#139](https://github.com/awslabs/green-boost/pull/139) [`f394ef3`](https://github.com/awslabs/green-boost/commit/f394ef39e0e7807152d3110f31353ba9554c3ca3) Thanks [@bestickley](https://github.com/bestickley)! - Update deps

### Patch Changes

- Updated dependencies [[`f394ef3`](https://github.com/awslabs/green-boost/commit/f394ef39e0e7807152d3110f31353ba9554c3ca3)]:
  - gboost-common@0.8.0

## 0.10.0

### Minor Changes

- [#127](https://github.com/awslabs/green-boost/pull/127) [`566c286`](https://github.com/awslabs/green-boost/commit/566c286224dbfb1be6c61dc1653407f3d08da39b) Thanks [@bestickley](https://github.com/bestickley)! - Default Function to ESM

## 0.9.2

### Patch Changes

- [#124](https://github.com/awslabs/green-boost/pull/124) [`5b464d9`](https://github.com/awslabs/green-boost/commit/5b464d9fddd6672a6581fb7e267d5a31155bdfe6) Thanks [@CPfaltzgraff](https://github.com/CPfaltzgraff)! - Fixed Nag Suppression on file upload construct

## 0.9.1

### Patch Changes

- [#122](https://github.com/awslabs/green-boost/pull/122) [`7829fd3`](https://github.com/awslabs/green-boost/commit/7829fd3960ace215d4bcb6279dbecc770608cfdc) Thanks [@CPfaltzgraff](https://github.com/CPfaltzgraff)! - Added Nag suppression to file upload construct

## 0.9.0

### Minor Changes

- [#116](https://github.com/awslabs/green-boost/pull/116) [`c1bbb43`](https://github.com/awslabs/green-boost/commit/c1bbb4356ac0f1cff461a507451218cbbc979973) Thanks [@CPfaltzgraff](https://github.com/CPfaltzgraff)! - Added FileUpload component and corresponding construct

## 0.8.2

### Patch Changes

- [#117](https://github.com/awslabs/green-boost/pull/117) [`fcb3c96`](https://github.com/awslabs/green-boost/commit/fcb3c96d0a2da90f71dbacf7775062ddd5e2d0c9) Thanks [@bestickley](https://github.com/bestickley)! - Make gboost-infra Bucket props optional

## 0.8.1

### Patch Changes

- Updated dependencies [[`4865d9b`](https://github.com/awslabs/green-boost/commit/4865d9b876d0d47713918ce307f6dc913fa0d6c6)]:
  - gboost-common@0.7.0

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
