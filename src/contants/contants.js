export default {
   "BASE_URL" : "http://localhost:3016/",
  // "BASE_URL" : "http://192.168.1.12:3012/",
  "PORTAL_SERVER":  "https://portal.applamdep.com/",
  
  "BASE_URL_CURRENT" : "http://localhost:3017/",
  //"BASE_URL_CURRENT" : "http://192.168.1.12:3012/",
  "BASE_URL_HISTORY_SKIN" : "https://soida.pensilia.com/lich-su-soi-da-with-iframe/",
  "LIST_USER" : "/api/list-user",
  "LIST_USER_WITH_ID" : "/api/list-user?id=",
  "ADD_USER" : "/api/add-user",
  "UPDATE_USER" : "/api/update-user",
  "GET_BOOK_LICH" : "api/booking/getAll",
  "ADD_BOOK_LICH" : "api/booking/add",
  "UPDATE_BOOK_LICH" : "api/booking/update",
  "DELETE_BOOK_LICH" : "api/booking/delete",

  "DELETE_USER" : "/api/delete-user",
  "LOGIN_ADMIN" : "/api/login_admin",
  "GET_SHOP" : "/api/get-shop",
  "GET_SALE" : "/api/get-sale",
  "GET_COEFFICIENT" : "/api/calculator-coefficient-user",
  "GET_COEFFICIENT_PER_SALE" : "/api/calculator-coefficient-user-per-sale",
  "GET_USER_SALE_BY_MONTH" : "/api/get-user-of-sale-by-month",
  "CALCULATOR_ALL_USER_OF_COMPANY" : "/api/calculator-all-user-company",
  "CALCULATOR_ALL_USER_OF_SALE" : "/api/calculator-all-user-of-sale",
  "GET_SEEDER" : "/api/get-seed",
  "GET_SALE_NAME": "/api/get-name-sale",
  "GET_USER_BY_ID": "/api/get-user-byID",

  "LIST_CUSTOMER" : "/api/list-customer",
  "LIST_CUSTOMER_BY_MONTH" : "/api/get-user-sale-by-month",

  "LIST_TYPEKEY" : "/api/list-typekey",
  "LIST_TYPEKEY_WITH_ID" : "/api/list-typekey?id=",
  "ADD_TYPEKEY" : "/api/add-typekey",
  "UPDATE_TYPEKEY" : "/api/update-typekey",
  "DELETE_TYPEKEY" : "/api/delete-typekey",

  "INFO_FUNC_WEB" :"/api/get-info-feature",

  "LIST_HARDWARE" : "/api/list-hardware",
  "LIST_HARDWARE_WITH_ID" : "/api/list-hardware?id=",
  "ADD_HARDWARE" : "/api/add-hardware",
  "UPDATE_HARDWARE" : "/api/update-hardware",
  "DELETE_HARDWARE" : "/api/delete-hardware",

  "LIST_ORDER" : "/api/list-order",
  "ADD_ORDER" : "/api/add-order",
  "UPDATE_STATUS_ORDER" : "/api/update-status-order",
  "CHECK_OUT": "/api/checkout-order",

  "LIST_TRANSACTION" : "/api/list-transaction",
  "ADD_TRANSACTION" : "/api/add-transaction",

  "LIST_CHECK_OUT" : "/api/list-checkout",
  "LIST_HARDWARE_CHECKOUT" : "/api/get-list-hardward-by-check-out",
  "UPDATE_STATUS_CHECKOUT" : "/api/update-status-hardware",

  "LIST_ORDER_DETAIL" : "/api/list-orderdetail",
  "ADD_ORDER_DETAIL" : "/api/add-orderdetail",

  "LIST_ROLE" : "/api/list-role",
  "LIST_ROLE_WITH_ID" : "/api/list-role?id=",
  "ADD_ROLE" : "/api/add-role",
  "UPDATE_ROLE" : "/api/update-role",
  "DELETE_ROLE" : "/api/delete-role",

  "LIST_PACKAGE" : "/api/list-package",
  "ADD_PACKAGE" : "/api/add-package",
  "UPDATE_PACKAGE" : "/api/update-package",
  "DELETE_PACKAGE" : "/api/delete-package",
  "PLUGIN_DATA_PACKAGE" : "/api/get-name-package",

  "LIST_SALELOG" : "/api/list-salelog",
  "LIST_SALELOG_WITH_ID" : "/api/list-salelog?id=",
  "ADD_SALELOG" : "/api/add-salelog",
  "UPDATE_SALELOG" : "/api/update-salelog",
  "DELETE_SALELOG" : "/api/delete-salelog",

  "DATA_SALE" : "/api/get-data-sale",
  "LIST_SALE" : "/api/list-sale",
  "LIST_SALE_WITH_ID" : "/api/list-sale?id=",
  "ADD_SALE" : "/api/add-sale",
  "UPDATE_SALE" : "/api/update-sale",
  "DELETE_SALE" : "/api/delete-sale",

  "LIST_KEYORDER" : "/api/list-keyorder",
  "LIST_KEYORDER_WITH_ID" : "/api/list-keyorder?id=",
  "ADD_KEYORDER" : "/api/add-keyorder",
  "UPDATE_KEYORDER" : "/api/update-keyorder",
  "DELETE_KEYORDER" : "/api/delete-keyorder",

  "LIST_KEY" : "/api/list-key",
  "LIST_KEY_WITH_ID" : "/api/list-key?id=",
  "ADD_KEY" : "/api/add-key",
  "UPDATE_KEY" : "/api/update-key",
  "DELETE_KEY" : "/api/delete-key",

  "PLUGIN_LIST_COMPANY" : "/api/plugin-list-company",
  "PLUGIN_LIST_COMPANY_BY_ID" : "/api/plugin-list-company-by-id",
  "PLUGIN_LIST_COMPANY_WITH_ID" : "/api/plugin-list-company?id=",
  "PLUGIN_ADD_COMPANY" : "/api/plugin-add-company",
  "PLUGIN_UPDATE_COMPANY" : "/api/plugin-update-company",
  "PLUGIN_DELETE_COMPANY" : "/api/plugin-delete-company",
  "PLUGIN_DATA_COMPANY" : "/api/plugin-get-data-company",

  "LIST_COMPANY" : "/api/list-company",
  "LIST_COMPANY_WITH_ID" : "/api/list-company?id=",
  "ADD_COMPANY" : "/api/add-company",
  "UPDATE_COMPANY" : "/api/update-company",
  "DELETE_COMPANY" : "/api/delete-company",
  "DATA_COMPANY" : "/api/get-data-company",

  "LIST_LINK" : "/api/list-link",
  "LIST_LINK_WITH_ID" : "/api/list-link?id=",
  "ADD_LINK" : "/api/add-link",
  "UPDATE_LINK" : "/api/update-link",
  "DELETE_LINK" : "/api/delete-link",
  "GET-LINK-BY-ID" : "/api/link-by-id",

  "LIST_FEATURE" : "/api/list-feature",
  "ADD_FEATURE" : "/api/add-feature",
  "UPDATE_FEATURE" : "/api/update-feature",
  "DELETE_FEATURE" : "/api/delete-feature",
  "DATA_CHOOSE_FEATURE" : "/api/get-feature-choose",

  "LIST_PLUGIN_ORDER" : "/api/plugin-list-order",
  "COUNT_PLUGIN_ORDER" : "/api/plugin-count-order",
  "LIST_PLUGIN_ORDER_BY_ID" : "/api/plugin-list-order-by-id",
  "LIST_PLUGIN_ORDER_FOR_ADMIN" : "/api/plugin-list-order-for-admin",
  "LIST_ORDER_BY_SALE" : "/api/plugin-list-order-by-saleid",
  "ADD_PLUGIN_ORDER" : "/api/plugin-add-order",
  "UPDATE_PLUGIN_ORDER" : "/api/plugin-update-order",
  "DELETE_PLUGIN_ORDER" : "/api/plugin-delete-order",
  "UPDATE_SLUG" : "/api/plugin-update-slug",

  "PLUGIN_LIST_USER" : "/api/plugin-list-user",
  "PLUGIN_ALL_USER" : "/api/plugin-all-user",
  "PLUGIN_SUBSALE_USER" : "/api/plugin-subsale-user",
  "PLUGIN_ADD_USER" : "/api/plugin-add-user",
  "PLUGIN_ADD_SALE" : "/api/plugin-add-sale",
  "PLUGIN_ADD_SUBSALE" : "/api/plugin-add-subsale",
  "PLUGIN_UPDATE_USER" : "/api/plugin-update-user",
  "PLUGIN_UPDATE_USER_COMPANY" : "/api/plugin-update-user-company",
  "PLUGIN_DELETE_USER" : "/api/plugin-delete-user",
  "PLUGIN_RESET_PASSWORD" : "/api/plugin-reset-password",
  "PLUGIN_CHANGE_PASSWORD" : "/api/plugin-change",
  "PLUGIN_CHECK_LINK" : "/api/plugin-check-link",
  "PLUGIN_UPDATE_PASSWORD" : "/api/plugin-update-password",

  "PLUGIN_UPDATE_STATUS" : "/api/plugin-update-status",
  "PLUGIN_LOGIN_ADMIN" : "/api/plugin-login_admin",
  "PLUGIN_FORGOT_PASS" : "/api/plugin-forgot-password",
  "PLUGIN_GET_USER_BYID" : "/api/plugin-get-user-byID",
  "PLUGIN_GET_USER_BY_BODY" : "/api/plugin-get-user-byID-with-body",

  "PLUGIN_LIST_ROLE" : "/api/plugin-list-role",
  "PLUGIN_ADD_ROLE" : "/api/plugin-add-role",
  "PLUGIN_UPDATE_ROLE" : "/api/plugin-update-role",
  "PLUGIN_DELETE_ROLE" : "/api/plugin-delete-role",

  "CUS_RES_LIST" : "/api/list-customer-request",
  "CUS_RES_LIST_COMPANY" : "/api/list-customer-request-for-company",
  "CUS_RES_ADD" : "/api/add-customer-request",
  "CUS_RES_UPDATE" : "/api/update-customer-request",
  "CUS_RES_DELETE" : "/api/delete-customer-request",

  "REWARD_INFO_LIST" : "/api/list-reward-info",
  "REWARD_INFO_LIST_COMPANY" : "/api/list-reward-info-for-company",
  "REWARD_INFO_ADD" : "/api/add-reward-info",
  "REWARD_INFO_UPDATE" : "/api/update-reward-info",
  "REWARD_INFO_DELETE" : "/api/delete-reward-info",


  "REWARD_TRANS_LIST" : "/api/list-reward-trans",
  "REWARD_TRANS_ADD" : "/api/list-reward-trans",
  "REWARD_TRANS_UPDATE" : "/api/update-reward-trans",
  "REWARD_TRANS_DELETE" : "/api/delete-reward-trans",

  "TYPE_REQUEST_LIST" : "/api/list-type-request",
  "TYPE_REQUEST_ADD" : "/api/add-type-request",
  "TYPE_REQUEST_UPDATE" : "/api/update-type-request",
  "TYPE_REQUEST_DELETE" : "/api/delete-type-request",

  "LIST_CUSTOMER": "/api/list-customer",
  "LIST_CUSTOMER_FOR_COMPANY": "/api/list-customer-for-company",
  "LIST_CUSTOMER_FOR_COMPANY_BY_MONTH": "/api/list-customer-for-company-by-month",

  "LIST_SUGGEST_ITEM": "/itemSdk",
  "LIST_SUGGEST_ITEM_COMPANY": "/itemSdk/",
  "LIST_SUGGEST_ITEM_ADMIN": "/itemSdk/admin/",
  "SEARCH_SUGGEST_ITEM_ADMIN": "/itemSdk/admin/search/",
  "SEARCH_SUGGEST_ITEM_COMPANY": "/itemSdk/search/",
  "ADD_SUGGEST_ITEM": "/itemSdk",
  "UPDATE_SUGGEST_ITEM": "/itemSdk/",
  "UPLOAD_IMAGE": "/itemSdk/upload_image",
  "UPLOAD_IMAGE_MAKEUP": "/itemSdk/upload_image_makeup",
  "UPLOAD_IMAGE_BRAND": "/itemSdk/upload_image_brand",
  "DELETE_SUGGEST_ITEM": "/itemSdk/deleteItem",
  "LIST_SDK": "/sdk",

  "LIST_BRAND": "/brands",
  "LIST_BRAND_COMPANY": "brands/",
  "ADD_BRAND": "/add-brand",
  "UPDATE_BRAND": "/update-brand",
  "DELETE_BRAND": "/delete-brand",

  "LIST_BRAND_PLUGIN": "/brand-plugin",
  "LIST_BRAND_PLUGIN_COMPANY": "/brand-plugin/",
  "ADD_BRAND_PLUGIN": "/add-brand-plugin",
  "UPDATE_BRAND_PLUGIN": "/update-brand-plugin",
  "DELETE_BRAND_PLUGIN": "/delete-brand-plugin",

  "LIST_PRODUCT": "/product",
  "LIST_PRODUCT_HAIR": "/product_hair",
  "LIST_PRODUCT_COMPANY": "/product/",
  "LIST_PRODUCT_COMPANY_HAIR": "/product_hair/",
  "ADD_PRODUCT": "/add-product",
  "ADD_PRODUCT_HAIR": "/add-product-hair",
  "UPDATE_PRODUCT": "/update-product",
  "DELETE_PRODUCT": "/delete-product",

  "LIST_TYPE": "/types",
  "LIST_TYPE_COMPANY": "types/",
  "ADD_TYPE": "/add-type",
  "UPDATE_TYPE": "/update-type",
  "DELETE_TYPE": "/delete-type",

  "LIST_COLOR": "/colors",
  "LIST_COLOR_COMPANY": "/colors/",
  "LIST_COLOR_SELECT": "/color-select",
  "ADD_COLOR": "/add-color",
  "UPDATE_COLOR": "/update-color",
  "DELETE_COLOR": "/delete-color",

  "LIST_HISTORY_SKIN": "/api/get-history-skin",
  "LIST_HISTORY_SKIN_BY_CONDITION": "/api/get-history-skin-by-condition",
  "ADD_HISTORY_SKIN": "/api/add-history-skin",


  "LIST_TYPE_PRODUCT": "/api/list-type-product",
  "ADD_TYPE_PRODUCT": "/api/add-type-product",
  "UPDATE_TYPE_PRODUCT": "/api/update-type-product",
  "DELETE_TYPE_PRODUCT": "/api/delete-type-product",


  "LIST_TYPE_SDK": "/api/list-type-sdk",
  "ADD_TYPE_SDK": "/api/add-type-sdk",
  "UPDATE_TYPE_SDK": "/api/update-type-sdk",
  "DELETE_TYPE_SDK": "/api/delete-type-sdk",

  "LIST_END_USER": "/api/list-end-user",
  "LOGIN_END_USER": "/api/login-end-user",
  "ADD_END_USER": "/api/add-end-user",
  "UPDATE_END_USER": "/api/update-end-user",
  "DELETE_END_USER": "/api/delete-end-user",

  "LIST_CONTACT_CUSTOMER": "/api/list-contact-customers",
  "ADD_CONTACT_CUSTOMER": "/api/add-contact-customers",
  "UPDATE_CONTACT_CUSTOMER": "/api/update-contact-customers",
  "DELETE_CONTACT_CUSTOMER": "/api/delete-contact-customers",
  "UPDATE_CONTACT_STATUS": "/api/update-contact-status",

  "ADD_ROLE_SUBADMIN": "/api/add-role-subadmin",
  "GET_ROLE_SUBADMIN": "/api/get-role-subadmin-by-id",

  "ADD_BANNER": "/api/add-banner",
  "GET_BANNER": "/api/get-banner",
  "UPLOAD_BANNER": "/api/upload-banner",


  "LIST_ProductSpecial": "/product-special/all",
  "LIST_ProductSpecial_COMPANY": "/product-special/all/",
  "ADD_ProductSpecial": "/api/prodcut-special/add",
  "UPDATE_ProductSpecial": "/api/prodcut-special/update",
  "DELETE_ProductSpecial": "/product-special/delete",


  "LIST_Banner": "/api/banner/all",
  "LIST_Banner_COMPANY": "/api/banner/all/",
  "ADD_Banner": "/api/banner/add",
  "UPDATE_Banner": "/api/banner/update",
  "DELETE_Banner": "/api/banner/delete",


  "CONFIG_THEME_UPDATE": "/api/get-config-color/update",
  "CONFIG_THEME_GET": "/api/get-config-color",


};
