---
"gboost-infra": minor
---

Change SuppressOkNags to SuppressNags and require user to pass in array of Suppression enums to specify which suppressions should be used. For previous behavior, use `new SuppressNags(Object.values(Supppression))`.
