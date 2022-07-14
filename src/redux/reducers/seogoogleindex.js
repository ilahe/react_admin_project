import {
    RETRIEVE_SEO_GOOGLE, RETRIEVE_SEO_GOOGLE_DELETE, RETRIEVE_SEO_GOOGLE_INDEX, RETRIEVE_SEO_GOOGLE_INSERT
} from "../actions/types";
const initialState = {
    seoGoogle: [],
    seoGoogleIndex: {},
    seoGoogleInsert: {},
    seoGoogleDelete: {}
};
function seoGoogleReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_SEO_GOOGLE:
            return {
                seoGoogle: payload
            };
        case RETRIEVE_SEO_GOOGLE_INDEX:
            return {
                seoGoogle: payload.mainData,
                seoGoogleIndex: payload.indexData
            };
        case RETRIEVE_SEO_GOOGLE_INSERT:
            return {
                seoGoogle: payload.mainData,
                seoGoogleInsert: payload.insertData
            };
        case RETRIEVE_SEO_GOOGLE_DELETE:
            return {
                seoGoogle: payload.mainData,
                seoGoogleDelete: payload.deleteData
            };
        default:
            return state;
    }
};
export default seoGoogleReducer;