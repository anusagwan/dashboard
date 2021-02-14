import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  loginReducers: loginReducers,
  dashboardReducer:dashboardReducer
});