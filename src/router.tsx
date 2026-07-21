import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import { InventoryPage, SettingsPage } from "./pages/Placeholder";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "inventory", Component: InventoryPage },
      { path: "settings", Component: SettingsPage },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
