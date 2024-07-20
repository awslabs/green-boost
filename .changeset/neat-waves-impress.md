---
"gboost-ui": minor
---

Remove deprecated exports from `gboost-ui`. This release migrates from Amplify UI and Vite to Material UI and Next.js. See discussions: [Frontend Tooling / Framework](https://github.com/awslabs/green-boost/discussions/214) and [Switch UI Component Library](https://github.com/awslabs/green-boost/discussions/213) for more details. For users currently on `gboost-ui`, we understand this is a very large change, but we believe these new technologies will enable Green Boost developers to build faster with React. All UI components have equivalents within Material UI that we recommend you upgrade to. If you cannot upgrade to Material UI, we recommend you extract the last `gboost-ui` source code from [here](https://github.com/awslabs/green-boost/tree/320f3e00d0fde2d86b570408648de260a5a3e2fd) and use it in your application.
