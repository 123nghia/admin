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
const RoleManager = React.lazy(() => import('./views/base/tables/AI_Skin/RoleManager'));
const PluginManager = React.lazy(() => import('./views/base/tables/AI_Skin/PluginManager'));
const PluginCustomer = React.lazy(() => import('./views/base/tables/AI_Skin/PluginCustomerManager'));
const PluginCreateOrder = React.lazy(() => import('./views/base/tables/AI_Skin/PluginCreateOrder'));


const PluginUserTable = React.lazy(() => import('./views/base/tables/AI_Skin/PluginUserTable'));
const RewardInfomation = React.lazy(() => import('./views/base/tables/AI_Skin/RewardInfomation'));
const ListFeatureOfCustomer = React.lazy(() => import('./views/base/tables/AI_Skin/ListFeatureOfCustomer'));
const CusRequest = React.lazy(() => import('./views/base/tables/AI_Skin/CustomerRequestTable'));

const CustomerManager = React.lazy(() => import('./views/base/tables/AI_Skin/CustomerManager'));
const HistorySkin = React.lazy(() => import('./views/base/tables/AI_Skin/HistorySkin'));
const UpdatePackage = React.lazy(() => import('./views/base/tables/UpdatePackage'));
const BrandPlugin = React.lazy(() => import('./views/base/tables/AI_Skin/BrandPlugin'));
const ProductPlugin = React.lazy(() => import('./views/base/tables/Prouduct/ProductSpecialPlugin'));

const BrandSlider = React.lazy(() => import('./views/base/tables/Banner/BrandSlider'));
const BookCalendar = React.lazy(() => import('./views/config/bookCalendar'));

const ConfigTheme = React.lazy(() => import('./views/base/tables/configSystem/ColorTheme'));



const PluginSubSaleTable = React.lazy(() => import('./views/base/tables/AI_Skin/PluginSubSaleTable'));

//User
const EndUserPlugin = React.lazy(() => import('./views/base/tables/User/EndUser'));
// config skin AI
const configSkinDisplay = React.lazy(() => import('./views/skin/configDisplay'));
const configContent = React.lazy(() => import('./views/skin/content'));
const configOverView = React.lazy(() => import('./views/skin/overView'));
const configWeb = React.lazy(() => import('./views/config/configWeb'));
//ADMIN MakeUp
const SuggestItem = React.lazy(() => import('./views/base/tables/MakeUp/SuggestItem'));
const Brand = React.lazy(() => import('./views/base/tables/MakeUp/Brand'));
const Product = React.lazy(() => import('./views/base/tables/MakeUp/Product'));
const ProductHair = React.lazy(() => import('./views/base/tables/MakeUp/ProductHair'));
const SubType = React.lazy(() => import('./views/base/tables/MakeUp/SubType'));
const SubTypeHair = React.lazy(() => import('./views/base/tables/MakeUp/SubTypeHair'));
const SubTypeMakeUp = React.lazy(() => import('./views/base/tables/MakeUp/SubTypeMakeUp'));
const Color = React.lazy(() => import('./views/base/tables/MakeUp/Color'));
const TypeOne = React.lazy(() => import('./views/base/tables/MakeUp/TypeOne'));

const Banner = React.lazy(() => import('./views/base/tables/Banner/Banner'));
const RequestSupport = React.lazy(() => import('./views/info/requestSupport'));

const GroupAge1 = React.lazy(() => import('./views/menard/groupAge1/groupAge1'));
const GroupAge2 = React.lazy(() => import('./views/menard/groupAge1/groupAge2'));
const GroupAge3 = React.lazy(() => import('./views/menard/groupAge1/groupAge3'));

const GroupAge4 = React.lazy(() => import('./views/menard/groupAge1/groupAge4'));

const ListVoucher = React.lazy(() => import('./views/list/voucher'));
const ListQuestion = React.lazy(() => import('./views/list/question'));

const ListAnswers = React.lazy(() => import('./views/list/answers'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  
  { path: '/nhom-tuoi-1', name: 'NhomTuoi1', component: GroupAge1 },
  { path: '/nhom-tuoi-2', name: 'NhomTuoi2', component: GroupAge2 },
  { path: '/nhom-tuoi-3', name: 'NhomTuoi3', component: GroupAge3 },
  { path: '/nhom-tuoi-4', name: 'NhomTuoi4', component: GroupAge4 },
  { path: '/list-voucher', name: 'ListVoucher', component: ListVoucher },
  { path: '/question-customer', name: 'ListQuestion', component: ListQuestion },
  { path: '/answers-customer', name: 'ListAnswers', component: ListAnswers },

  
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
  { path: '/book-calendar', name: 'BookCalendar', component: BookCalendar },

  
  { path: '/spending_order', name: 'SPENDING', component: SPENDING },
  { path: '/role_manager', name: 'Role Manager', component: RoleManager },
  { path: '/plugin_manager', name: 'Plugin Manager', component: PluginManager },
  { path: '/customer_manager', name: 'Customer Manager', component: PluginCustomer },
  { path: '/plugin_create_order', name: 'Create Order', component: PluginCreateOrder },

  { path: '/yeu-cau-ho-tro', name: 'Request Suport', component: RequestSupport },
  
  { path: '/saleAdmin', name: 'SALE', component: PluginUserTable },
  { path: '/reward_info', name: 'REWARD_INFO', component: RewardInfomation },
  { path: '/feature_customer', name: 'REWARD_INFO', component: ListFeatureOfCustomer },
  { path: '/cus_request', name: 'REWARD_INFO', component: CusRequest },

  { path: '/customer', name: 'Customer Manager', component: CustomerManager },
  { path: '/historyskin', name: 'History Skin', component: HistorySkin },
  { path: '/update_package', name: 'UpdatePackage', component: UpdatePackage },
  { path: '/brand_skin', name: 'Brand Skin', component: BrandPlugin },
  { path: '/subsale', name: 'Sub Sale', component: PluginSubSaleTable },
  { path: '/skin/config', name: 'confgSkinDisplay', component: configSkinDisplay },
  { path: '/skin/configContent', name: 'configContent', component: configContent },
  { path: '/skin/configOverView', name: 'configOverView', component: configOverView },
  { path: '/cau-hinh-trang-web', name: 'configWeb', component: configWeb },


  
  
  //admin product
  { path: '/products-special', name: 'productSpecial', component: ProductPlugin },


  //User
  { path: '/end_user', name: 'End User', component: EndUserPlugin },


  { path: '/banner', name: 'Banner User', component: Banner },

  { path: '/quan-ly-banner', name: 'BannerSlider', component: BrandSlider },

  { path: '/config-theme', name: 'Config themes', component: ConfigTheme },

  //Admin MakeUp
  { path: '/suggest', name: 'SuggestItem', component: SuggestItem },
  { path: '/brand', name: 'BRAND', component: Brand },
  { path: '/product', name: 'BRAND', component: Product },
  { path: '/product_hair', name: 'BRAND', component: ProductHair },
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
];

export default routes;
