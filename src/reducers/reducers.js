


import { combineReducers } from 'redux';
import { changeNavbar } from './Navbar';
const reducers = combineReducers({
  
    sidebarShow : changeNavbar
});

export default reducers;
