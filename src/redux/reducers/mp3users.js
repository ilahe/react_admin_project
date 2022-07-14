import {
    DELETE_MP3USERS,
    RETRIEVE_MP3USERS,
    SEARCH_MP3USERS
} from "../actions/types";
const initialState = {
    mp3Users: [],
};
function mp3UsersReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_MP3USERS:
            return { mp3Users: payload};
        case SEARCH_MP3USERS:
            return { mp3Users: payload};
        case DELETE_MP3USERS:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default mp3UsersReducer;