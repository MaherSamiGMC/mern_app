
import {ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST,ADD_NEW_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT} from '../constants/userConstants'
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