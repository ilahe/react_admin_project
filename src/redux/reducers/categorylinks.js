import {
    DELETE_CATEGORY_LINK,
    EDIT_CATEGORY_LINK,
    RETRIEVE_CATEGORY_LINK_SELECT,
    RETRIEVE_CATEGORY_LINKS, SEARCH_CATEGORY_LINK,
    UPDATE_CATEGORY_LINK
} from "../actions/types";
const initialState = {
    categoryLinks: [],
    categoryLinkSelect: [],
    categoryLink: {}
};
function categoryLinksReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_CATEGORY_LINKS:
            return {
                categoryLinks: payload
            };
        case SEARCH_CATEGORY_LINK:
            return {
                categoryLinks: payload
            };
        case RETRIEVE_CATEGORY_LINK_SELECT:
            return {
                categoryLinkSelect: payload
            };
        case EDIT_CATEGORY_LINK:
            return {
                categoryLinkSelect: payload.selectData,
                categoryLink: payload.mainData
            };
        case UPDATE_CATEGORY_LINK:
            return state.map((categoryLink) => {
                if (categoryLink.id === payload.id) {
                    return {
                        ...categoryLink,
                        ...payload,
                    };
                } else {
                    return categoryLink;
                }
            });
        case DELETE_CATEGORY_LINK:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default categoryLinksReducer;