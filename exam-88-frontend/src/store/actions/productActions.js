import axios from '../../axios-shop';
import {FETCH_PRODUCT_ONE_SUCCESS, FETCH_PRODUCTS_SUCCESS} from "./typeActions";
import {push} from 'connected-react-router';

export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const createPostSuccess = () => ({type: FETCH_PRODUCT_ONE_SUCCESS});

export const fetchProducts = () => {
    return dispatch => {
        return axios.get('/products').then(
            response => dispatch(fetchProductsSuccess(response.data))
        );
    };
};
export const createProducts = postData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {"Authorization": token}};
        return axios.post('/products', postData, config).then(
            response => {
                dispatch(createPostSuccess());
                dispatch(push('/'))
            }
        )
    };
};