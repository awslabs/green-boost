---
"gboost": patch
---

Use `ts-node` in templates infra/ folder instead of vite-node to reduce ESM errors. ts-node is more forgiving. Make ts-node path dynamic to resolve windows/linux issues.
