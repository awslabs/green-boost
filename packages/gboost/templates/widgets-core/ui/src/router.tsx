// @ts-nocheck
import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./App.js";
import { Root } from "./pages/Root.js";
import { CreateWidget } from "./pages/widgets/create/CreateWidget.js";
import { WidgetsTable } from "./pages/widgets/WidgetsTable.js";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "widgets",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <WidgetsTable />,
          },
          {
            path: "create",
            element: <CreateWidget />,
          },
        ],
      },
      {
        path: "components",
        lazy: () =>
          import("./pages/components/Components.js").then(({ Components }) => ({
            Component: Components,
          })),
      },
    ],
  },
]);
