import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { LiveStreams } from "./components/LiveStreams";
import { UserManagement } from "./components/UserManagement";
import { Analytics } from "./components/Analytics";
import { Violations } from "./components/Violations";
import { Settings } from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "live-streams", Component: LiveStreams },
      { path: "users", Component: UserManagement },
      { path: "analytics", Component: Analytics },
      { path: "violations", Component: Violations },
      { path: "settings", Component: Settings },
    ],
  },
]);
