import React from "react";

const Dashboard = React.lazy(() => import("./views/DashBoard/Dashboard"));
const TableUser = React.lazy(() => import("./views/base/tables/TableUser"));
const TableCompany = React.lazy(() => import("./views/base/tables/Company"));
const TableKey = React.lazy(() => import("./views/base/tables/Key"));
const TableKeyOrder = React.lazy(() => import("./views/base/tables/KeyOrder"));
const TablePakageSale = React.lazy(() =>
  import("./views/base/tables/PakageSale")
);
const TablePakageSaleLog = React.lazy(() =>
  import("./views/base/tables/PakageSaleLog")
);
const TableRole = React.lazy(() => import("./views/base/tables/Role"));
const TableTypeKey = React.lazy(() => import("./views/base/tables/TypeKey"));
const TableLink = React.lazy(() => import("./views/base/tables/Link"));
const HistorySkinUser = React.lazy(() =>
  import("./views/base/tables/HistorySkinUser")
);
const ListShopManager = React.lazy(() =>
  import("./views/base/tables/ListShopManager")
);
const ListSale = React.lazy(() => import("./views/base/tables/ListSale"));
const ListCustomer = React.lazy(() =>
  import("./views/base/tables/ListCustomer")
);
const HardWare = React.lazy(() => import("./views/base/tables/HardWare"));
const Order = React.lazy(() => import("./views/base/tables/CreateOrder"));
const OrderTable = React.lazy(() => import("./views/base/tables/OrderTable"));
const TransactionTable = React.lazy(() =>
  import("./views/base/tables/Transaction")
);
const DetailCollaborators = React.lazy(() =>
  import("./views/evoucher/ManageSales/DetailCollaborators")
);
const HardWareManager = React.lazy(() =>
  import("./views/base/tables/HardWareManager")
);
const Profile = React.lazy(() => import("./views/users/ProfileUser"));
const SPENDING = React.lazy(() => import("./views/base/tables/SpendingOrder"));
const RoleManager = React.lazy(() =>
  import("./views/base/tables/AI_Skin/RoleManager")
);
const PluginManager = React.lazy(() =>
  import("./views/base/tables/AI_Skin/PluginManager")
);
const PluginCustomer = React.lazy(() =>
  import("./views/base/tables/AI_Skin/PluginCustomerManager")
);
const PluginCreateOrder = React.lazy(() =>
  import("./views/base/tables/AI_Skin/PluginCreateOrder")
);

const PluginUserTable = React.lazy(() =>
  import("./views/base/tables/AI_Skin/PluginUserTable")
);
const RewardInfomation = React.lazy(() =>
  import("./views/base/tables/AI_Skin/RewardInfomation")
);
const ListFeatureOfCustomer = React.lazy(() =>
  import("./views/base/tables/AI_Skin/ListFeatureOfCustomer")
);
const CusRequest = React.lazy(() =>
  import("./views/base/tables/AI_Skin/CustomerRequestTable")
);

const CustomerManager = React.lazy(() =>
  import("./views/base/tables/AI_Skin/CustomerManager")
);
const HistorySkin = React.lazy(() =>
  import("./views/base/tables/AI_Skin/HistorySkin")
);
const UpdatePackage = React.lazy(() =>
  import("./views/base/tables/UpdatePackage")
);
const BrandPlugin = React.lazy(() =>
  import("./views/base/tables/AI_Skin/BrandPlugin")
);
const ProductPlugin = React.lazy(() =>
  import("./views/base/tables/Prouduct/ProductSpecialPlugin")
);

const BrandSlider = React.lazy(() =>
  import("./views/base/tables/Banner/BrandSlider")
);
const BookCalendar = React.lazy(() =>
  import("./views/components/bookCalendar")
);

const ConfigTheme = React.lazy(() =>
  import("./views/base/tables/configSystem/ColorTheme")
);

const PluginSubSaleTable = React.lazy(() =>
  import("./views/base/tables/AI_Skin/PluginSubSaleTable")
);

//User
const EndUserPlugin = React.lazy(() =>
  import("./views/base/tables/User/EndUser")
);

const DetailEndUser = React.lazy(() =>
  import("./views/base/tables/User/DetailEndUser/DetailEndUser.js")
);
// config skin AI

const configSkinDisplay = React.lazy(() =>
  import("./views/skin/configDisplay")
);
const configContent = React.lazy(() => import("./views/skin/content"));
const configOverView = React.lazy(() => import("./views/skin/overView"));
const configWeb = React.lazy(() => import("./views/config/configWeb"));
const GeneralStatistics = React.lazy(() =>
  import("./views/evoucher/GeneralStatistics")
);
const ManageProvider = React.lazy(() =>
  import("./views/evoucher/ManagerProvider/index.js")
);

//ADMIN MakeUp
const SuggestItem = React.lazy(() =>
  import("./views/base/tables/MakeUp/SuggestItem")
);
const Brand = React.lazy(() => import("./views/base/tables/MakeUp/Brand"));
const Product = React.lazy(() => import("./views/base/tables/MakeUp/Product"));
const ProductHair = React.lazy(() =>
  import("./views/base/tables/MakeUp/ProductHair")
);
const SubType = React.lazy(() => import("./views/base/tables/MakeUp/SubType"));
const SubTypeHair = React.lazy(() =>
  import("./views/base/tables/MakeUp/SubTypeHair")
);
const SubTypeMakeUp = React.lazy(() =>
  import("./views/base/tables/MakeUp/SubTypeMakeUp")
);
const Color = React.lazy(() => import("./views/base/tables/MakeUp/Color"));
const TypeOne = React.lazy(() => import("./views/base/tables/MakeUp/TypeOne"));

// evoucher
const Banner = React.lazy(() => import("./views/base/tables/Banner/Banner"));
const RequestSupport = React.lazy(() => import("./views/info/requestSupport"));
const ListEvoucher = React.lazy(() => import("./views/evoucher/ListVoucher"));
const ListUserEvoucher = React.lazy(() =>
  import("./views/evoucher/ListUserEvoucher/index.js")
);
const DetailVoucher = React.lazy(() =>
  import("./views/evoucher/ListUserEvoucher/DetailUserVoucher/index.js")
);

const ListCampaign = React.lazy(() =>
  import("./views/evoucher/ManagerCampaign/ListCampaign/index.js")
);
const ManageCampaign = React.lazy(() =>
  import("./views/evoucher/ManagerCampaign/index.js")
);
const ManageInventory = React.lazy(() =>
  import("./views/evoucher/ManageInventory.js")
);
const ManageVoucher = React.lazy(() =>
  import("./views/evoucher/ManageVoucher")
);
const BannerSales = React.lazy(() =>
  import("./views/evoucher/ManageBanner/Banner")
);
const BannerLastestOffers = React.lazy(() =>
  import("./views/evoucher/ManageBanner/Banner_LatestOffers")
);
const BannerPromotion = React.lazy(() =>
  import("./views/evoucher/ManageBanner/Banner_Promotion")
);
const Statistics = React.lazy(() => import("./views/evoucher/Chart"));

const NotEnough = React.lazy(() => import("./views/Pages/NotEnough/NotEnough"));
const AdminConfigWebsite = React.lazy(() =>
  import("././views/config/configWebAdmin")
);

const ManageSalesGroup = React.lazy(() =>
  import("./views/evoucher/ManageSalesGroup/index.js")
);
const ManageSales = React.lazy(() =>
  import("./views/evoucher/ManageSales/index.js")
);
const ManageAccount = React.lazy(() =>
  import("./views/evoucher/ManageAccount")
);
const ManagePartner = React.lazy(() =>
  import("./views/evoucher/ManageCollaborators/ManageCollaborators")
);
const DetailCampaign = React.lazy(() =>
  import("./views/evoucher/ManagerCampaign/DetailCampaign/index.js")
);
const DetailProvider = React.lazy(() =>
  import("./views/evoucher/ManagerProvider/DetailProvider/index.js")
);

const DetailInventory = React.lazy(() =>
  import("./views/evoucher/DetailInventory")
);
// evoucher - log
const Iplog = React.lazy(() =>
  import("./views/evoucher/Log/Iplog/index.js")
);
const Smslog = React.lazy(() =>
  import("./views/evoucher/Log/Sms/index.js")
);
const ND = React.lazy(() =>
  import("./views/evoucher/Log/Campaign/ND.js")
);


const roleUser = localStorage.getItem("type");

const routes = [
  { path: "/", exact: true, name: "Home" },

  // evoucher
  {
    path: "/general-statistics",
    name: "General Statistics",
    component: GeneralStatistics,
  },
  // evoucher - log
  {
    path: "/log-ip",
    name: "Iplog",
    component: roleUser === "0" ? Iplog : NotEnough,
  },
  {
    path: "/log-sms",
    name: "Smslog",
    component: roleUser === "0" ? Smslog : NotEnough,
  },
  {
    path: "/log-ngocdung",
    name: "ND",
    component: roleUser === "0" ? ND : NotEnough,
  },
  // evoucher - details
  {
    path: "/detail-evoucher/:id",
    name: "DetailVoucher",
    component: DetailVoucher,
  },
  {
    path: "/detail-inventory/:id",
    name: "DetailInventory",
    component: DetailInventory,
  },
  {
    path: "/detail-campaign/:id",
    name: "DetailCampaign",
    component: DetailCampaign,
  },
  {
    path: "/detail-provider/:id",
    name: "DetailProvider",
    component: DetailProvider,
  },

  {
    path: "/detail-users/:id",
    name: "DetailEndUser",
    component: DetailEndUser,
  },
  {
    path: "/detail-collaborators",
    name: "DetailCollaborators",
    component: roleUser === "0" ? DetailCollaborators : NotEnough,
  },
  // evoucher - list
  { path: "/list-evoucher", name: "ListEvoucher", component: ListEvoucher },
  { path: "/list-campaign", name: "ListCampaign", component: ListCampaign },
  {
    path: "/list-user-evoucher",
    name: "ListUserEvoucher",
    component: ListUserEvoucher,
  },
  { path: "/evoucher-statistics", name: "Statistics", component: Statistics },

  // evoucher - banner
  {
    path: "/banner-sales",
    name: "BannerSales",
    component: roleUser === "0" ? BannerSales : NotEnough,
  },
  {
    path: "/banner-lastestoffers",
    name: "BannerLastestOffers",
    component: roleUser === "0" ? BannerLastestOffers : NotEnough,
  },
  {
    path: "/banner-promotion",
    name: "BannerPromotion",
    component: roleUser === "0" ? BannerPromotion : NotEnough,
  },
  // evoucher - manage
  { path: "/manage-voucher", name: "ManageVoucher", component: ManageVoucher },
  {
    path: "/manage-campaign",
    name: "ManageCampaign",
    component: ManageCampaign,
  },
  {
    path: "/manage-sales",
    name: "ManageSales",
    component: roleUser === "0" ? ManageSales : NotEnough,
  },
  {
    path: "/manage-partner",
    name: "ManagePartner",
    component: ManagePartner,
  },

  {
    path: "/manage-inventory",
    name: "ManageInventory",
    component: ManageInventory,
  },
  {
    path: "/manage-sales-group",
    name: "ManageSalesGroup",
    component: roleUser === "0" ? ManageSalesGroup : NotEnough,
  },
  {
    path: "/manage-account",
    name: "ManageAccount",
    component: ManageAccount,
  },
  {
    path: "/manage-provider",
    name: "Manage Provider",
    component: ManageProvider,
  },
  {
    path: "/customer_manager",
    name: "Customer Manager",
    component: roleUser === "0" ? PluginCustomer : NotEnough,
  },
  // cau hinh web
  {
    path: "/cau-hinh-trang-web",
    name: "configWeb",
    component: roleUser !== "0" ? configWeb : NotEnough,
  },

  {
    path: "/admin-config-web",
    name: "AdminConfigWebsite",
    component: roleUser === "0" ? AdminConfigWebsite : NotEnough,
  },

  // layout web
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", name: "Users", component: TableUser },
  { path: "/company", name: "Company", component: TableCompany },
  { path: "/key", name: "Key", component: TableKey },
  { path: "/key_order", name: "Key", component: TableKeyOrder },
  { path: "/pakage_sale", name: "Sale", component: TablePakageSale },
  { path: "/pakage_sale_log", name: "SaleLog", component: TablePakageSaleLog },
  { path: "/type_key", name: "TypeKey", component: TableTypeKey },
  { path: "/role", name: "Role", component: TableRole },
  { path: "/link", name: "Key", component: TableLink },
  { path: "/history", name: "HistorySkin", component: HistorySkinUser },
  { path: "/sales", name: "ShopManager", component: ListSale },
  { path: "/shopmanager", name: "ShopManager", component: ListShopManager },
  { path: "/customers", name: "Customers", component: ListCustomer },
  { path: "/hardware", name: "HardWares", component: HardWare },
  { path: "/orders", name: "Orders", component: Order },
  { path: "/order_table", name: "Order Table", component: OrderTable },
  { path: "/transaction", name: "Transaction", component: TransactionTable },
  { path: "/hardwaremanager", name: "HardWare", component: HardWareManager },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", name: "Users", component: TableUser },
  { path: "/company", name: "Company", component: TableCompany },
  { path: "/key", name: "Key", component: TableKey },
  { path: "/key_order", name: "Key", component: TableKeyOrder },
  { path: "/pakage_sale", name: "Sale", component: TablePakageSale },
  { path: "/pakage_sale_log", name: "SaleLog", component: TablePakageSaleLog },
  { path: "/type_key", name: "TypeKey", component: TableTypeKey },
  { path: "/role", name: "Role", component: TableRole },
  { path: "/link", name: "Key", component: TableLink },
  { path: "/history", name: "HistorySkin", component: HistorySkinUser },
  { path: "/sales", name: "ShopManager", component: ListSale },
  { path: "/shopmanager", name: "ShopManager", component: ListShopManager },
  { path: "/customers", name: "Customers", component: ListCustomer },
  { path: "/hardware", name: "HardWares", component: HardWare },
  { path: "/orders", name: "Orders", component: Order },
  { path: "/order_table", name: "Order Table", component: OrderTable },
  { path: "/transaction", name: "Transaction", component: TransactionTable },
  { path: "/hardwaremanager", name: "HardWare", component: HardWareManager },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/spending_order", name: "SPENDING", component: SPENDING },
  { path: "/role_manager", name: "Role Manager", component: RoleManager },
  { path: "/plugin_manager", name: "Plugin Manager", component: PluginManager },
  {
    path: "/plugin_create_order",
    name: "Create Order",
    component: PluginCreateOrder,
  },

  { path: "/saleAdmin", name: "SALE", component: PluginUserTable },
  { path: "/reward_info", name: "REWARD_INFO", component: RewardInfomation },
  {
    path: "/feature_customer",
    name: "REWARD_INFO",
    component: ListFeatureOfCustomer,
  },

  // skin - care
  { path: "/banner", name: "Banner User", component: Banner },
  {
    path: "/quan-ly-banner",
    name: "BannerSlider",
    component: roleUser === "0" ? BrandSlider : NotEnough,
  },
  { path: "/cus_request", name: "REWARD_INFO", component: CusRequest },
  { path: "/customer", name: "Customer Manager", component: CustomerManager },
  { path: "/historyskin", name: "History Skin", component: HistorySkin },
  { path: "/update_package", name: "UpdatePackage", component: UpdatePackage },
  { path: "/brand_skin", name: "Brand Skin", component: BrandPlugin },
  {
    path: "/subsale",
    name: "Sub Sale",
    component: roleUser !== "0" ? NotEnough : PluginSubSaleTable,
  },
  {
    path: "/skin/config",
    name: "confgSkinDisplay",
    component: configSkinDisplay,
  },
  {
    path: "/skin/configContent",
    name: "configContent",
    component: configContent,
  },
  {
    path: "/skin/configOverView",
    name: "configOverView",
    component: configOverView,
  },

  { path: "/spending_order", name: "SPENDING", component: SPENDING },
  { path: "/role_manager", name: "Role Manager", component: RoleManager },
  { path: "/plugin_manager", name: "Plugin Manager", component: PluginManager },
  {
    path: "/customer_manager",
    name: "Customer Manager",
    component: roleUser === "0" ? PluginCustomer : NotEnough,
  },
  {
    path: "/plugin_create_order",
    name: "Create Order",
    component: PluginCreateOrder,
  },

  {
    path: "/yeu-cau-ho-tro",
    name: "Request Suport",
    component: RequestSupport,
  },
  {
    path: "/manage-provider",
    name: "Manage Provider",
    component: ManageProvider,
  },

  { path: "/saleAdmin", name: "SALE", component: PluginUserTable },
  { path: "/reward_info", name: "REWARD_INFO", component: RewardInfomation },
  {
    path: "/feature_customer",
    name: "REWARD_INFO",
    component: ListFeatureOfCustomer,
  },
  { path: "/cus_request", name: "REWARD_INFO", component: CusRequest },

  { path: "/customer", name: "Customer Manager", component: CustomerManager },
  { path: "/historyskin", name: "History Skin", component: HistorySkin },
  { path: "/update_package", name: "UpdatePackage", component: UpdatePackage },
  { path: "/brand_skin", name: "Brand Skin", component: BrandPlugin },
  {
    path: "/subsale",
    name: "Sub Sale",
    component: roleUser !== "0" ? NotEnough : PluginSubSaleTable,
  },
  {
    path: "/skin/config",
    name: "confgSkinDisplay",
    component: configSkinDisplay,
  },
  {
    path: "/skin/configContent",
    name: "configContent",
    component: configContent,
  },
  {
    path: "/skin/configOverView",
    name: "configOverView",
    component: configOverView,
  },
  
  {
    path: "/general-statistics",
    name: "General Statistics",
    component: GeneralStatistics,
  },

  { path: "/saleAdmin", name: "SALE", component: PluginUserTable },
  { path: "/reward_info", name: "REWARD_INFO", component: RewardInfomation },
  {
    path: "/feature_customer",
    name: "REWARD_INFO",
    component: ListFeatureOfCustomer,
  },
  { path: "/cus_request", name: "REWARD_INFO", component: CusRequest },

  { path: "/customer", name: "Customer Manager", component: CustomerManager },
  { path: "/historyskin", name: "History Skin", component: HistorySkin },
  { path: "/update_package", name: "UpdatePackage", component: UpdatePackage },
  { path: "/brand_skin", name: "Brand Skin", component: BrandPlugin },

  {
    path: "/subsale",
    name: "Sub Sale",
    component: roleUser !== "0" ? NotEnough : PluginSubSaleTable,
  },

  //admin product
  {
    path: "/products-special",
    name: "productSpecial",
    component: ProductPlugin,
  },

  //User
  { path: "/end_user", name: "End User", component: EndUserPlugin },
  { path: "/config-theme", name: "Config themes", component: ConfigTheme },

  //Admin MakeUp
  { path: "/suggest", name: "SuggestItem", component: SuggestItem },
  { path: "/brand", name: "BRAND", component: Brand },
  { path: "/product", name: "BRAND", component: Product },
  { path: "/product_hair", name: "BRAND", component: ProductHair },
  { path: "/subtype", name: "Sub Type", component: SubType },
  { path: "/subtype_hair", name: "Sub Type", component: SubTypeHair },
  { path: "/subtype_makeup", name: "Sub Type", component: SubTypeMakeUp },
  { path: "/color", name: "Color", component: Color },
  { path: "/items/0", name: "K1", component: TypeOne },
  { path: "/items/1", name: "K2", component: TypeOne },
  { path: "/items/2", name: "K3", component: TypeOne },
  { path: "/items/3", name: "K4", component: TypeOne },
  { path: "/items/4", name: "K5", component: TypeOne },
  { path: "/items/5", name: "K6", component: TypeOne },
];
export default routes;
