
import { GET_PRODUCTS_FAIL } from '../constants/productConstants'
import {ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST,ADD_NEW_USER_SUCCESS, GET_USER_DETAILS_FAIL, GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT} from '../constants/userConstants'
export const addNewUserReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_USER_REQUEST:
            return {loading:true}
        case ADD_NEW_USER_SUCCESS:
            return {laoding:false,message:action.payload}
        case ADD_NEW_USER_FAIL:
            return {loading:false,error:"user already exists"}
        default:
            return state
    }
}
export const loginReducer=(state={},action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return {loading:true}
        case LOGIN_SUCCESS:
            return {laoding:false,user:action.payload}
        case LOGIN_FAIL:
            return {loading:false}
        case LOUGOUT:
            return {}
        default:
            return state
    }
}

export const getUserDetailsReducer=(state={},action)=>{
    switch (action.type) {
        case GET_USER_DETAILS_REQUEST:
            return {loading:true}
        case GET_USER_DETAILS_SUCCESS:
            return {laoding:false,userdetails:action.payload}
        case GET_USER_DETAILS_FAIL:
            return {loading:false}
        default:
            return state
    }
}
