---
"gboost": patch
---

Fix issue in PostgreSQL templates where SQL identifiers are invalid if app id contains dash. Converts to underscore.
