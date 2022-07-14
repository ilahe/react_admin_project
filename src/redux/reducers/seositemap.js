import {
    EDIT_SEO_SITEMAP,
    RETRIEVE_SEO_SITEMAP, SEARCH_SEO_SITEMAP,
    UPDATE_SEO_SITEMAP
} from "../actions/types";
const initialState = {
    seoSitemaps: [],
    seoSitemap: {},
};
function seoSitemapReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_SEO_SITEMAP:
            return {
                seoSitemaps: payload
            };
        case SEARCH_SEO_SITEMAP:
            return {
                seoSitemaps: payload
            };
        case EDIT_SEO_SITEMAP:
            return {
                seoSitemaps: payload
            };
        case UPDATE_SEO_SITEMAP:
            return state.map((seoSitemap) => {
                if (seoSitemap.id === payload.id) {
                    return {
                        ...seoSitemap,
                        ...payload,
                    };
                } else {
                    return seoSitemap;
                }
            });
        default:
            return state;
    }
};
export default seoSitemapReducer;