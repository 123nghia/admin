import React from 'react';

const Category = React.lazy(() => import('./views/base/tables/Category'));
const Brand = React.lazy(() => import('./views/base/tables/Brand'));
const Dashboard = React.lazy(() => import('./views/DashBoard/Dashboard'));
const Product = React.lazy(() => import('./views/base/tables/Product'));
const Account = React.lazy(() => import('./views/base/tables/Account'));
const Order = React.lazy(() => import('./views/base/tables/Order'));
const Deal = React.lazy(() => import('./views/base/tables/Deal'));
const CountOrder = React.lazy(() => import('./views/base/tables/CountOrder'));
const BannerHomePage = React.lazy(() => import('./views/base/tables/BannerHomePage'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/category', name: 'CATEGORY', component: Category },
  { path: '/brand', name: 'BRAND', component: Brand },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/product', name: 'Product', component: Product },
  { path: '/account', name: 'Account', component: Account },
  { path: '/order', name: 'Order', component: Order },
  { path: '/deal', name: 'Deal', component: Deal },
  { path: '/countorder', name: 'Count Order', component: CountOrder },
  { path: '/banner_home_page', name: 'BannerHomePage', component: BannerHomePage },
];

export default routes;
