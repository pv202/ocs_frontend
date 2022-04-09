import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import CustomerReducer from './CustomerReducer'
const RootReducer = combineReducers({
    LoginReducer,CustomerReducer,

});
export default RootReducer;