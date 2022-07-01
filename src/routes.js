import React from "react";

const Dashboard = React.lazy(() => import("./views/DashBoard/Dashboard"));
const Profile = React.lazy(() => import("./views/users/ProfileUser"));
const NotEnough = React.lazy(() => import("./views/Pages/NotEnough/NotEnough"));
const AdminConfigWebsite = React.lazy(() =>
  import("././views/config/configWebAdmin")
);
const codeColor = React.lazy(() => import("./views/makeup/CodeColor"));
const colorMakeup = React.lazy(() => import("./views/makeup/ColorMakeup"));
const colorHair = React.lazy(() => import("./views/makeup/ColorHair"));

const roleUser = localStorage.getItem("type");

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/code-color", name: "codeColor", component: codeColor },
  { path: "/list-color-makeup", name: "colorMakeup", component: colorMakeup },
  { path: "/list-color-hair", name: "colorHair", component: colorHair },

];
export default routes;
