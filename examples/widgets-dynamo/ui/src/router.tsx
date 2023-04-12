import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./App.js";
import { Root } from "./pages/Root.js";
import { CreateWidget } from "./pages/widgets/create/CreateWidget.js";
import { EditWidget } from "./pages/widgets/$id/EditWidget.js";
import { WidgetsTable } from "./pages/widgets/WidgetsTable.js";
import { CreateComponent } from "./pages/components/create/CreateComponent.js";
import { EditComponent } from "./pages/components/$id/EditComponent.js";

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
          {
            path: ":id",
            element: <EditWidget />,
          },
        ],
      },
      {
        path: "components",
        element: <Outlet />,
        children: [
          {
            index: true,
            lazy: () =>
              import("./pages/components/ComponentsTable.js").then(
                ({ ComponentsTable }) => ({
                  Component: ComponentsTable,
                })
              ),
          },
          {
            path: "create",
            element: <CreateComponent />,
          },
          {
            path: ":id",
            element: <EditComponent />,
          },
        ],
      },
    ],
  },
]);
