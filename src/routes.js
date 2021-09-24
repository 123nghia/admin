import React from 'react';

const Category = React.lazy(() => import('./views/base/tables/Category'));
const Brand = React.lazy(() => import('./views/base/tables/Brand'));
const Dashboard = React.lazy(() => import('./views/DashBoard/Dashboard'));
const Product = React.lazy(() => import('./views/base/tables/Product'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/category', name: 'CATEGORY', component: Category },
  { path: '/brand', name: 'BRAND', component: Brand },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/product', name: 'Product', component: Product },
];

export default routes;
