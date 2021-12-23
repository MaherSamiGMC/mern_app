import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/productConstants"


export const getProductsReducer=(state={},action)=>{
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {loading:true}
        case GET_PRODUCTS_SUCCESS:
            return {loading:false,products:action.payload}
        case GET_PRODUCTS_REQUEST:
            return {loading:false}
        default:
            return state
    }
}