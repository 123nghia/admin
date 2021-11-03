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
const SEOInfo = React.lazy(() => import('./views/base/tables/SEOInfo'));

const BrandSuggest = React.lazy(() => import('./views/base/tables/SuggestItem/BrandSuggest'));
const SuggestItem = React.lazy(() => import('./views/base/tables/SuggestItem/SuggestItem'));
const BrandMakeUp = React.lazy(() => import('./views/base/tables/SuggestItem/BrandMakeUp'));
const SubTypeMakeUp = React.lazy(() => import('./views/base/tables/SuggestItem/SubTypeMakeUp'));
const ColorMakeUp = React.lazy(() => import('./views/base/tables/SuggestItem/ColorMakeUp'));
const ProductMakeUp = React.lazy(() => import('./views/base/tables/SuggestItem/ProductMakeUp'));
const ColorHair = React.lazy(() => import('./views/base/tables/SuggestItem/ColorHair'));
const ProductHair = React.lazy(() => import('./views/base/tables/SuggestItem/ProductHair'));
const HistorySkin = React.lazy(() => import('./views/base/tables/SuggestItem/HistorySkin'));

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
  { path: '/seo', name: 'SEO', component: SEOInfo },

  { path: '/brand_suggest', name: 'BRAND SUGGEST', component: BrandSuggest },
  { path: '/items/0', name: 'K1', component: SuggestItem },
  { path: '/items/1', name: 'K2', component: SuggestItem },
  { path: '/items/2', name: 'K3', component: SuggestItem },
  { path: '/items/3', name: 'K4', component: SuggestItem },
  { path: '/items/4', name: 'K5', component: SuggestItem },
  { path: '/items/5', name: 'K6', component: SuggestItem },
  { path: '/brand_makeup', name: 'BRAND MAKEUP', component: BrandMakeUp },
  { path: '/subtype_makeup', name: 'SUBTYPE MAKEUP', component: SubTypeMakeUp },
  { path: '/color_makeup', name: 'SUBTYPE MAKEUP', component: ColorMakeUp },
  { path: '/product_makeup', name: 'SUBTYPE MAKEUP', component: ProductMakeUp },
  { path: '/color_hair', name: 'SUBTYPE MAKEUP', component: ColorHair },
  { path: '/product_hair', name: 'SUBTYPE MAKEUP', component: ProductHair },
  { path: '/history_skin', name: 'SUBTYPE MAKEUP', component: HistorySkin },
];

export default routes;
