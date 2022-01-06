import * as actions from "../constant/index";

const init = {
  K5: [],
  K6: [],
  K7: [],
  K8: [],
  K9: [],
};

const products = (state = init, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_SUGGEST_REQUEST:
      return {
        products: [],
      };
    case actions.GET_PRODUCTS_SUGGEST_SUCCESS:
      return {
      
        products: action.payload.products,
        
      };
    case actions.GET_PRODUCTS_SUGGEST_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export default products;