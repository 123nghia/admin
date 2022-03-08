import { combineReducers } from 'redux';
import {getData_AllAPI} from './data/reducers';
import productsSuggest from './reducersForder/productsSuggest';
import { TypeUser } from './reducersForder/account';
const reducers = combineReducers({
  root: ()=>{return {}},
  getData_AllAPI,
  productsSuggest,
  TypeUser

});

export default reducers;
