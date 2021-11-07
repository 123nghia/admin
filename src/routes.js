import React from 'react';
import UserAdmin from './views/base/tables/Admin_App/Users/UserAdmin';

const Dashboard = React.lazy(() =>
  import('./views/DashBoard/Dashboard'));
const TableUser = React.lazy(() =>
  import('./views/base/tables/TableUser'));
const TableCompany = React.lazy(() =>
  import('./views/base/tables/Company'));
const TableKey = React.lazy(() =>
  import('./views/base/tables/Key'));
const TableKeyOrder = React.lazy(() =>
  import('./views/base/tables/KeyOrder'));
const TablePakageSale = React.lazy(() =>
  import('./views/base/tables/PakageSale'));
const TablePakageSaleLog = React.lazy(() =>
  import('./views/base/tables/PakageSaleLog'));
const TableRole = React.lazy(() =>
  import('./views/base/tables/Role'));
const TableTypeKey = React.lazy(() =>
  import('./views/base/tables/TypeKey'));
const TableLink = React.lazy(() =>
  import('./views/base/tables/Link'));
const HistorySkinUser = React.lazy(() =>
  import('./views/base/tables/HistorySkinUser'));
const ListShopManager = React.lazy(() =>
  import('./views/base/tables/ListShopManager'));
const ListSale = React.lazy(() =>
  import('./views/base/tables/ListSale'));
const ListCustomer = React.lazy(() =>
  import('./views/base/tables/ListCustomer'));
const HardWare = React.lazy(() =>
  import('./views/base/tables/HardWare'));
const Order = React.lazy(() =>
  import('./views/base/tables/CreateOrder'));
const OrderTable = React.lazy(() =>
  import('./views/base/tables/OrderTable'));
const TransactionTable = React.lazy(() =>
  import('./views/base/tables/Transaction'));
const HardWareManager = React.lazy(() =>
  import('./views/base/tables/HardWareManager'));
const Profile = React.lazy(() =>
  import('./views/users/ProfileUser'));
const SPENDING = React.lazy(() =>
  import('./views/base/tables/SpendingOrder'));
const RoleManager = React.lazy(() =>
  import('./views/base/tables/AI_Skin/RoleManager'));
const PluginManager = React.lazy(() =>
  import('./views/base/tables/AI_Skin/PluginManager'));
const PluginCustomer = React.lazy(() =>
  import('./views/base/tables/AI_Skin/PluginCustomerManager'));
const PluginCreateOrder = React.lazy(() =>
  import('./views/base/tables/AI_Skin/PluginCreateOrder'));
const FeatureTable = React.lazy(() =>
  import('./views/base/tables/AI_Skin/FeatureTable'));
const PluginOrderTable = React.lazy(() =>
  import('./views/base/tables/AI_Skin/PluginOrderTable'));
const PluginUserTable = React.lazy(() =>
  import('./views/base/tables/AI_Skin/PluginUserTable'));
const RewardInfomation = React.lazy(() =>
  import('./views/base/tables/AI_Skin/RewardInfomation'));
const ListFeatureOfCustomer = React.lazy(() =>
  import('./views/base/tables/AI_Skin/ListFeatureOfCustomer'));
const CusRequest = React.lazy(() =>
  import('./views/base/tables/AI_Skin/CustomerRequestTable'));
const TypeRequest = React.lazy(() =>
  import('./views/base/tables/AI_Skin/TypeRequestModel'));
const CustomerManager = React.lazy(() =>
  import('./views/base/tables/AI_Skin/CustomerManager'));
const HistorySkin = React.lazy(() =>
  import('./views/base/tables/AI_Skin/HistorySkin'));
const ContactCustomer = React.lazy(() =>
  import('./views/base/tables/AI_Skin/ContactCustomer'));
const UpdatePackage = React.lazy(() =>
  import('./views/base/tables/UpdatePackage'));
const BrandPlugin = React.lazy(() =>
  import('./views/base/tables/AI_Skin/BrandPlugin'));

//ADMIN MakeUp
const SuggestItem = React.lazy(() =>
  import('./views/base/tables/MakeUp/SuggestItem'));
const Brand = React.lazy(() =>
  import('./views/base/tables/MakeUp/Brand'));
const Product = React.lazy(() =>
  import('./views/base/tables/MakeUp/Product'));
const SubType = React.lazy(() =>
  import('./views/base/tables/MakeUp/SubType'));
const SubTypeHair = React.lazy(() =>
  import('./views/base/tables/MakeUp/SubTypeHair'));
const SubTypeMakeUp = React.lazy(() =>
  import('./views/base/tables/MakeUp/SubTypeMakeUp'));
const Color = React.lazy(() =>
  import('./views/base/tables/MakeUp/Color'));
const TypeOne = React.lazy(() =>
  import('./views/base/tables/MakeUp/TypeOne'));

//ADMIN APP
const UserApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/Users/UserTable'));
const BrandApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/MakeUp/Brand'));
const SubTypeApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/MakeUp/SubType'));
const ColorApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/MakeUp/Color'));
const SkuApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/MakeUp/Sku'));
const SkuHairApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/Hair/Sku'));
const HairColorApp = React.lazy(() =>
  import('./views/base/tables/Admin_App/Hair/Color'));
const SuggestOne = React.lazy(() =>
  import('./views/base/tables/Admin_App/Skins/SuggestItem'));
const ListCompany = React.lazy(() =>
  import('./views/base/tables/Admin_App/Users/ListCompany'));
const ListUserAdmin = React.lazy(() =>
  import('./views/base/tables/Admin_App/Users/UserAdmin'));


const Bookinghistory = React.lazy(() =>
  import('./views/base/tables/Booking/HistoryBooking'));
const PlaceBooking = React.lazy(() =>
  import('./views/base/tables/Booking/PlaceBooking'));
const ServiceBooking = React.lazy(() =>
  import('./views/base/tables/Booking/Booking'));

const NotificationType = React.lazy(() =>
  import('./views/base/tables/Notification/NotificationType'));
const NotificationThemplate = React.lazy(() =>
  import('./views/base/tables/Notification/NotificationThemplate'));
const Notification = React.lazy(() =>
  import('./views/base/tables/Notification/Notification'));

const CategoryStore = React.lazy(() =>
  import('./views/base/tables/Store/Category'));
const BrandStore = React.lazy(() =>
  import('./views/base/tables/Store/Brand'));
const ProductStore = React.lazy(() =>
  import('./views/base/tables/Store/Product'));

const OrderStore = React.lazy(() =>
  import('./views/base/tables/Order/Order'));
const TransportStore = React.lazy(() =>
  import('./views/base/tables/Order/Transport'));

const Point = React.lazy(() =>
  import('./views/base/tables/Points/Point'));

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
  { path: '/reward_info', name: 'REWARD_INFO', component: RewardInfomation },
  { path: '/feature_customer', name: 'REWARD_INFO', component: ListFeatureOfCustomer },
  { path: '/cus_request', name: 'REWARD_INFO', component: CusRequest },
  { path: '/type_request', name: 'REWARD_INFO', component: TypeRequest },
  { path: '/customer', name: 'Customer Manager', component: CustomerManager },
  { path: '/historyskin', name: 'History Skin', component: HistorySkin },
  { path: '/update_package', name: 'UpdatePackage', component: UpdatePackage },
  { path: '/contact', name: 'Contact', component: ContactCustomer },
  { path: '/brand_skin', name: 'Brand Skin', component: BrandPlugin },

  //Admin MakeUp
  // { path: '/suggest', name: 'SuggestItem', component: SuggestItem },
  { path: '/brand', name: 'BRAND', component: Brand },
  { path: '/product', name: 'BRAND', component: Product },
  { path: '/subtype', name: 'Sub Type', component: SubType },
  { path: '/subtype_hair', name: 'Sub Type', component: SubTypeHair },
  { path: '/subtype_makeup', name: 'Sub Type', component: SubTypeMakeUp },
  { path: '/color', name: 'Color', component: Color },
  { path: '/items/0', name: 'K1', component: TypeOne },
  { path: '/items/1', name: 'K2', component: TypeOne },
  { path: '/items/2', name: 'K3', component: TypeOne },
  { path: '/items/3', name: 'K4', component: TypeOne },
  { path: '/items/4', name: 'K5', component: TypeOne },
  { path: '/items/5', name: 'K6', component: TypeOne },

  //Admin App
  { path: '/users_table', name: 'User Table', component: UserApp },
  { path: '/brand_table', name: 'Brand Table', component: BrandApp },
  { path: '/subtype_table', name: 'Type Table', component: SubTypeApp },
  { path: '/color_table', name: 'Color Table', component: ColorApp },
  { path: '/sku_table', name: 'Color Table', component: SkuApp },
  { path: '/sku_hair', name: 'Color Table', component: SkuHairApp },
  { path: '/color_hair', name: 'Color Table', component: HairColorApp },
  { path: '/suggest/K1', name: 'Color Table', component: SuggestOne },
  { path: '/suggest/K5', name: 'Color Table', component: SuggestOne },
  { path: '/suggest/K6', name: 'Color Table', component: SuggestOne },
  { path: '/suggest/K7', name: 'Color Table', component: SuggestOne },
  { path: '/suggest/K8', name: 'Color Table', component: SuggestOne },
  { path: '/suggest/K9', name: 'Color Table', component: SuggestOne },
  { path: '/list_company', name: 'List Company', component: ListCompany },
  { path: '/user_admin', name: 'List Company', component: ListUserAdmin },


  { path: '/danh-sach-dat-lich', name: 'historyBooking', component: Bookinghistory },
  { path: '/danh-sach-dich-vu', name: 'history', component: ServiceBooking },
  { path: '/danh-sach-dia-diem', name: 'places', component: PlaceBooking },

  { path: '/danh_muc', name: 'places', component: CategoryStore },
  { path: '/thuong_hieu', name: 'places', component: BrandStore },
  { path: '/san_pham', name: 'places', component: ProductStore },

  { path: '/loai_thong_bao', name: 'places', component: NotificationType },
  { path: '/danh_sach_thong_bao', name: 'places', component: Notification },
  { path: '/noi_dung_thong_bao', name: 'places', component: NotificationThemplate },

  { path: '/don_hang', name: 'places', component: OrderStore },
  { path: '/van_chuyen', name: 'places', component: TransportStore },

  { path: '/tich_diem', name: 'places', component: Point },

];

export default routes;
