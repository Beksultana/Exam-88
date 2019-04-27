import axios from '../../axios-shop';
import {FETCH_CATEGORIES_SUCCESS} from "./typeActions";

export const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});

export const fetchCategories = () => {
    return dispatch => {
        return axios.get('/categories').then(
            response => dispatch(fetchCategoriesSuccess(response.data))
        );
    };
};
