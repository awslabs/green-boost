---
to: infra/src/groups.ts
---

// used in src/back-end-stack and front-end/src/pages
export const groups = [
  {
    groupName: "Admin",
    precedence: 10,
    description: "Can perform all operations",
  },
  {
    groupName: "User",
    precedence: 20,
    description: "Can perform most operations",
  },
  {
    groupName: "UserReadOnly",
    precedence: 30,
    description: "Can perform only read operations",
  },
];
