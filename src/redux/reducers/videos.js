import {
    DELETE_VIDEO,
    RETRIEVE_VIDEOS
} from "../actions/types";
const initialState = {
    videos: [],
    video: {}
};
function videosReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_VIDEOS:
            return {
                videos: payload
            };
        case DELETE_VIDEO:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default videosReducer;