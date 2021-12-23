import axios from "axios"
import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT } from "../constants/userConstants"


export const addNewUser=(newUser)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_NEW_USER_REQUEST})
        const {data}=await axios.post('http://localhost:4000/userAPI/newUser',newUser)
        dispatch({type:ADD_NEW_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_NEW_USER_FAIL})

    }
}

export const login=(userCred)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data}=await axios.post('http://localhost:4000/userAPI/login',userCred)
        localStorage.setItem('cred',JSON.stringify(data))
        dispatch({type:LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL})

    }
}

export const lougout=()=>(dispatch)=>{
    dispatch({type:LOUGOUT})
    localStorage.removeItem('cred')
}