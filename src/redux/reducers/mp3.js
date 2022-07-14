import {
    DELETE_MP3,
    EDIT_MP3,
    RETRIEVE_MP3, SEARCH_MP3,
    UPDATE_MP3
} from "../actions/types";
const initialState = {
    mp3All: [],
    mp3: {}
};
function mp3Reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_MP3:
            return {
                mp3All: payload
            };
        case SEARCH_MP3:
            return {
                mp3All: payload
            };
        case EDIT_MP3:
            return {
                mp3: payload
            };
        case UPDATE_MP3:
            return state.map((mp3) => {
                if (mp3.id === payload.id) {
                    return {
                        ...mp3,
                        ...payload,
                    };
                } else {
                    return mp3;
                }
            });
        case DELETE_MP3:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};

export default mp3Reducer;