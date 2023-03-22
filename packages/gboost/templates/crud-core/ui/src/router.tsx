// @ts-nocheck
import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./App.js";
import { Root } from "./pages/Root.js";
import { CreateItem } from "./pages/items/create/CreateItem.js";
import { EditItem } from "./pages/items/$id/EditItem.js";
import { ItemsTable } from "./pages/items/ItemTable.js";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "items",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ItemsTable />,
          },
          {
            path: "create",
            element: <CreateItem />,
          },
          {
            path: ":id",
            element: <EditItem />,
          },
        ],
      },
    ],
  },
]);
