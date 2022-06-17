import React from "react";

const Dashboard = React.lazy(() => import("./views/DashBoard/Dashboard"));
const Profile = React.lazy(() => import("./views/users/ProfileUser"));
const NotEnough = React.lazy(() => import("./views/Pages/NotEnough/NotEnough"));
const AdminConfigWebsite = React.lazy(() =>
  import("././views/config/configWebAdmin")
);
const listCategories = React.lazy(() => import("./views/tikicare/categories"));
const produtcs = React.lazy(() => import("./views/tikicare/products"));
const branch = React.lazy(() => import("./views/tikicare/branch"));
const news = React.lazy(() => import("./views/tikicare/news"));
const partner = React.lazy(() => import("./views/tikicare/partner"));
const feedback = React.lazy(() => import("./views/tikicare/feedback"));
const promotion = React.lazy(() =>
  import("./views/tikicare/registerPromotion")
);
const roleUser = localStorage.getItem("type");

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/feedback",
    name: "feedback",
    component: feedback,
  },
  {
    path: "/register-promotion",
    name: "register-promotion",
    component: promotion,
  },

  { path: "/profile", name: "Profile", component: Profile },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  {
    path: "/admin-config-web",
    name: "AdminConfigWebsite",
    component: roleUser === "0" ? AdminConfigWebsite : NotEnough,
  },
  {
    path: "/list-categories",
    name: "ListCategories",
    component: listCategories,
  },
  {
    path: "/list-products",
    name: "produtcs",
    component: produtcs,
  },
  {
    path: "/list-brand",
    name: "branch",
    component: branch,
  },
  {
    path: "/list-partner",
    name: "partner",
    component: partner,
  },
  {
    path: "/list-news",
    name: "news",
    component: news,
  },
];
export default routes;
