import { GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL } from "../constants/productConstants"
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