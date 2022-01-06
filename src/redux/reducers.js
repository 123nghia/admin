import { combineReducers } from 'redux';
import {getData_AllAPI} from './data/reducers';
import productsSuggest from './reducersForder/productsSuggest';

const reducers = combineReducers({
  root: ()=>{return {}},
  getData_AllAPI,
  productsSuggest
});

export default reducers;
