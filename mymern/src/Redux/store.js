import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer } from "./reducers/productReducers";
import { addNewUserReducer, loginReducer } from "./reducers/userReducers";


const reducer=combineReducers({
    getProducts:getProductsReducer,
    addNewUser:addNewUserReducer,
    loginDetails:loginReducer
})

const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={
    loginDetails:{userInfo:fromLocalStorage}
}


const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))


export default store