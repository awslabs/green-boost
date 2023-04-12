---
"gboost-infra": patch
---

Update `StaticSite` to disable WAF by default. This resolves issue where deploying in non-us-east-1 regions fails as WAF for CloudFront must be deployed in us-east-1.
