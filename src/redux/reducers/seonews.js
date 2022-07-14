import {
    EDIT_SEO_NEWS,
    RETRIEVE_SEO_NEWS, SEARCH_SEO_NEWS,
    UPDATE_SEO_NEWS
} from "../actions/types";
const initialState = {
    seoNewsAll: [],
    seoNews: {},
};
function seoNewsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_SEO_NEWS:
            return {
                seoNewsAll: payload
            };
        case SEARCH_SEO_NEWS:
            return {
                seoNewsAll: payload
            };
        case EDIT_SEO_NEWS:
            return {
                seoNews: payload
            };
        case UPDATE_SEO_NEWS:
            return state.map((seoNews) => {
                if (seoNews.id === payload.id) {
                    return {
                        ...seoNews,
                        ...payload,
                    };
                } else {
                    return seoNews;
                }
            });
        default:
            return state;
    }
};
export default seoNewsReducer;