import {
    RETRIEVE_NEWS, RETRIEVE_NEWS_SELECT, SEARCH_NEWS
} from "../actions/types";
const initialState = {
    news: [],
    newsSelect: [],
};
function newsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_NEWS:
            return {
                news: payload
            };
        case SEARCH_NEWS:
            return {
                news: payload
            };
        default:
            return state;
    }
};
export default newsReducer;