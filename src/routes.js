import React from "react";
import Loadable from "react-loadable";
// import DefaultLayout from './containers/DefaultLayout';
function Loading() {
  return <div>Loading...</div>;
}

const UserAdmin = Loadable({
  loader: () => import("./views/UserAdmin"),
  loading: Loading,
});

const Company = Loadable({
  loader: () => import("./views/Company"),
  loading: Loading,
});

const PackageSale = Loadable({
  loader: () => import("./views/PackageSale"),
  loading: Loading,
});

const PackageSaleLog = Loadable({
  loader: () => import("./views/PackageSaleLog"),
  loading: Loading,
});

const Role = Loadable({
  loader: () => import("./views/Role"),
  loading: Loading,
});

const routes = [
  { path: "/user_admin", exact: true, name: "UserAdmin", component: UserAdmin },
  { path: "/company", exact: true, name: "Company", component: Company },
  { path: "/package_sale", exact: true, name: "PakageSale", component: PackageSale },
  { path: "/package_sale_log", exact: true, name: "PakageSaleLog", component: PackageSaleLog },
  { path: "/role", exact: true, name: "Role", component: Role },
  { path: "/Key", exact: true, name: "Key", component: "" },
  { path: "/type_key", exact: true, name: "TypeKey", component: "" },
  { path: "/key_order", exact: true, name: "KeyOrder", component: "" }
];

export default routes;
