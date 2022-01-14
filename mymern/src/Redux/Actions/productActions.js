import { GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL, ADD_NEW_PRODUCT_FAIL, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from "../constants/productConstants"
import axios from 'axios'

export const getProducts=()=>async(dispatch)=>{
    try {
        dispatch({type:GET_PRODUCTS_REQUEST})

        const {data}=await axios.get('http://localhost:4000/productAPI')
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL})
    }
}

export const addNewProduct=(newProduct)=>async(dispatch,getState)=>{
    try {
        dispatch({type:ADD_NEW_PRODUCT_REQUEST})
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        const {data}=await axios.post('http://localhost:4000/productAPI/newProduct',newProduct,config)
        dispatch({type:ADD_NEW_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_NEW_PRODUCT_FAIL})

    }
}

export const deleteProduct=(id)=>async(dispatch,getState)=>{
    try {
        dispatch({type:DELETE_PRODUCT_REQUEST})
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        const {data}=await axios.delete(`http://localhost:4000/productAPI/${id}`,config)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAIL})

    }
}