---
"gboost-ui": minor
---

BREAKING CHANGE:
Change smart field imports from "gboost-ui" to "gboost-ui/smart-fields".
In a previous release, react-hook-form was changed from a dependency to a peerDependency which is correct dependency behavior as react-hook-form is used in consuming apps that require forms. However, not all apps will need react-hook-form so it's an optional peer dependency. The problem was gboost-ui exported React components that imported react-hook-form which causes errors. Now, if a developer wants to use smart fields from gboost-ui they'll need to import from "gboost-ui/smart-fields" and install react-hook-form as a peer dependency.
