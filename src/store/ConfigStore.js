import {createStore, applyMiddleware} from 'redux';
import RootReducer from'./reducers/RootReducer';
import thunk from 'redux-thunk';

export default function ConfigStore(){
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
};