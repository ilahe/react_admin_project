import {
    DELETE_LOG,
    RETRIEVE_LOGS, SEARCH_LOG
} from "../actions/types";
const initialState = [];
function logsReducer(logs = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_LOGS:
            return payload;
        case SEARCH_LOG:
            return payload;
        case DELETE_LOG:
            return logs.filter(({ id }) => id !== payload.id);
        default:
            return logs;
    }
};
export default logsReducer;