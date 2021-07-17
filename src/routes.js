import React from 'react';

const Dashboard = React.lazy(() => import('./views/DashBoard/Dashboard'));
const TableUser = React.lazy(() => import('./views/base/tables/TableUser'));
const TableCompany = React.lazy(() => import('./views/base/tables/Company'));
const TableKey = React.lazy(() => import('./views/base/tables/Key'));
const TableKeyOrder = React.lazy(() => import('./views/base/tables/KeyOrder'));
const TablePakageSale = React.lazy(() => import('./views/base/tables/PakageSale'));
const TablePakageSaleLog = React.lazy(() => import('./views/base/tables/PakageSaleLog'));
const TableRole = React.lazy(() => import('./views/base/tables/Role'));
const TableTypeKey = React.lazy(() => import('./views/base/tables/TypeKey'));
const TableLink = React.lazy(() => import('./views/base/tables/Link'));
const HistorySkinUser = React.lazy(() => import('./views/base/tables/HistorySkinUser'));
const ListShopManager = React.lazy(() => import('./views/base/tables/ListShopManager'));
const ListSale = React.lazy(() => import('./views/base/tables/ListSale'));
const ListCustomer = React.lazy(() => import('./views/base/tables/ListCustomer'));
const HardWare = React.lazy(() => import('./views/base/tables/HardWare'));
const Order = React.lazy(() => import('./views/base/tables/CreateOrder'));
const OrderTable = React.lazy(() => import('./views/base/tables/OrderTable'));
const TransactionTable = React.lazy(() => import('./views/base/tables/Transaction'));
const HardWareManager = React.lazy(() => import('./views/base/tables/HardWareManager'));
const Profile = React.lazy(() => import('./views/users/ProfileUser'));
const SPENDING = React.lazy(() => import('./views/base/tables/SpendingOrder'));
const RoleManager = React.lazy(() => import('./views/base/tables/RoleManager'));
const PluginManager = React.lazy(() => import('./views/base/tables/PluginManager'));
const PluginCustomer = React.lazy(() => import('./views/base/tables/PluginCustomerManager'));
const PluginCreateOrder = React.lazy(() => import('./views/base/tables/PluginCreateOrder'));
const FeatureTable = React.lazy(() => import('./views/base/tables/FeatureTable'));
const PluginOrderTable = React.lazy(() => import('./views/base/tables/PluginOrderTable'));
const PluginUserTable = React.lazy(() => import('./views/base/tables/PluginUserTable'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'Users', component: TableUser },
  { path: '/company', name: 'Company', component: TableCompany },
  { path: '/key', name: 'Key', component: TableKey },
  { path: '/key_order', name: 'Key', component: TableKeyOrder },
  { path: '/pakage_sale', name: 'Sale', component: TablePakageSale },
  { path: '/pakage_sale_log', name: 'SaleLog', component: TablePakageSaleLog },
  { path: '/type_key', name: 'TypeKey', component: TableTypeKey },
  { path: '/role', name: 'Role', component: TableRole },
  { path: '/link', name: 'Key', component: TableLink },
  { path: '/history', name: 'HistorySkin', component: HistorySkinUser },
  { path: '/sales', name: 'ShopManager', component: ListSale },
  { path: '/shopmanager', name: 'ShopManager', component: ListShopManager },
  { path: '/customers', name: 'Customers', component: ListCustomer },
  { path: '/hardware', name: 'HardWares', component: HardWare },
  { path: '/orders', name: 'Orders', component: Order },
  { path: '/order_table', name: 'Order Table', component: OrderTable },
  { path: '/transaction', name: 'Transaction', component: TransactionTable },
  { path: '/hardwaremanager', name: 'HardWare', component: HardWareManager },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/spending_order', name: 'SPENDING', component: SPENDING },
  { path: '/role_manager', name: 'Role Manager', component: RoleManager },
  { path: '/plugin_manager', name: 'Plugin Manager', component: PluginManager },
  { path: '/customer_manager', name: 'Customer Manager', component: PluginCustomer },
  { path: '/plugin_create_order', name: 'Create Order', component: PluginCreateOrder },
  { path: '/feature', name: 'Feature', component: FeatureTable },
  { path: '/list_order', name: 'Order Plugin', component: PluginOrderTable },
  { path: '/saleAdmin', name: 'SALE', component: PluginUserTable },
];

export default routes;
