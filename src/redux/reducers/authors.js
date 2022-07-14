import {
    DELETE_AUTHOR,
    EDIT_AUTHOR, RETRIEVE_AUTHOR_SELECT,
    RETRIEVE_AUTHORS, SEARCH_AUTHOR, UPDATE_AUTHOR
} from "../actions/types";
const initialState = {
    authors: [],
    authorSelect: [],
    author: {}
};

function authorsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_AUTHORS:
            return {
                authors: payload
            };
        case SEARCH_AUTHOR:
            return {
                authors: payload
            };
        case RETRIEVE_AUTHOR_SELECT:
            return {
                authorSelect: payload
            };
        case EDIT_AUTHOR:
            return {
                authorSelect: payload.selectData,
                author: payload.mainData
            };
        case UPDATE_AUTHOR:
            return state.map((author) => {
                if (author.id === payload.id) {
                    return {
                        ...author,
                        ...payload,
                    };
                } else {
                    return author;
                }
            });
        case DELETE_AUTHOR:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default authorsReducer;