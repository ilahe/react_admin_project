import {
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    RETRIEVE_CATEGORIES,
    RETRIEVE_CATEGORY_SELECT, SEARCH_CATEGORY,
    UPDATE_CATEGORY
} from "../actions/types";
const initialState = {
    categories: [],
    categorySelect: [],
    category: {}
};
function categoriesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_CATEGORIES:
            return {
                categories: payload
            };
        case SEARCH_CATEGORY:
            return {
                categories: payload
            };
        case RETRIEVE_CATEGORY_SELECT:
            return {
                categorySelect: payload
            };
        case EDIT_CATEGORY:
            return {
                category: payload
            };
        case UPDATE_CATEGORY:
            return state.map((category) => {
                if (category.id === payload.id) {
                    return {
                        ...category,
                        ...payload,
                    };
                } else {
                    return category;
                }
            });
        case DELETE_CATEGORY:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default categoriesReducer;