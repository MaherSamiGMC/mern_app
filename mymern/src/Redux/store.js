import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { addNewProductReducer, deleteProductReducer, getProductsReducer } from "./reducers/productReducers";
import { addNewUserReducer, getUserDetailsReducer, loginReducer } from "./reducers/userReducers";


const reducer=combineReducers({
    getProducts:getProductsReducer,
    addNewUser:addNewUserReducer,
    loginDetails:loginReducer,
    getUserDetails:getUserDetailsReducer,
    addNewProduct:addNewProductReducer,
    deleteProduct:deleteProductReducer
})

const fromLocalStorage=localStorage.getItem('cred') ? JSON.parse(localStorage.getItem('cred')) : null

const initState={
    loginDetails:{user:fromLocalStorage}
}


const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))


export default store