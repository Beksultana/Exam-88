import {FETCH_PRODUCT_ONE_SUCCESS, FETCH_PRODUCTS_SUCCESS} from "../actions/typeActions";

const initialState = {
    products: [],
    product: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        case FETCH_PRODUCT_ONE_SUCCESS:
            return {...state, product: action.product};
        default:
            return state;
    }
};

export default reducer;
