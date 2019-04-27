import axios from '../../axios-shop';
import {FETCH_PRODUCT_ONE_SUCCESS, FETCH_PRODUCTS_SUCCESS} from "./typeActions";

export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const fetchProductOneSuccess = product => ({type: FETCH_PRODUCT_ONE_SUCCESS, product});

export const fetchProducts = () => {
    return dispatch => {
        return axios.get('/products').then(
            response => dispatch(fetchProductsSuccess(response.data))
        );
    };
};

export const fetchProductOne = categoryId => {
    return dispatch => {
        return axios.get('/products?category=' + categoryId).then(
            response => {
                dispatch(fetchProductOneSuccess(response.data))
            }
        )
    };
};