---
"gboost-infra": minor
---

Deprecate `UserManagement`, `UserBase`, and `OidcUserBase` because they're poor abstraction layers. User directory/pool infra is very custom and consuming developers will need to open source code to learn what's being abstracted. Recommend developers use AWS CDK's Cognito L3 constructs to setup user pools and identity providers if using Cognito and for user management developers can see `gboost create` auth template
