import { UPDATE_PRODUCTLIST } from "../Actions/index";

const initialState = {
    products: []
};

function rootReducer(state = initialState, action) {
    if (action.type === UPDATE_PRODUCTLIST) {
        return Object.assign({}, state, {
            products: state.products.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;