import axios from "axios";
import {getProductsSuggest} from '../api/getProductsSuggest';
import * as actions from "../constant/index";

export const fetchList = (params={})=>{
  return {
      type : actions.GET_PRODUCTS_SUGGEST_REQUEST,
  }
}

export const fetchListSuccess = (data)=>{
  return {
      type : actions.GET_PRODUCTS_SUGGEST_SUCCESS,
      payload : {
          data
      }
  }
}
export const fetchListError = (error)=>{
  return {
      type : actions.GET_PRODUCTS_SUGGEST_FAIL,
      payload : {
          error
      }
  }
}

export const getProductsSuggestRequest = (number,item) => {
  return dispatch => {
    dispatch(fetchList())
    getProductsSuggest().then(res =>{
            const data  = res.data;
            console.log(data);
            dispatch(fetchListSuccess(data))
          }).catch(error=>{
              dispatch(fetchListError(error))
          })
    }
  };