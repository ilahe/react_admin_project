import {
    RETRIEVE_STATISTIC_TYPE,
    RETRIEVE_STATISTICS, SEARCH_STATISTICS,
} from "../actions/types";
const initialState = {
    statistics: [],
    statisticType: [],
};
function statisticsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_STATISTICS:
            return {
                statistics: payload
            };
        case SEARCH_STATISTICS:
            return {
                statistics: payload
            };
        case RETRIEVE_STATISTIC_TYPE:
            return {
                statisticType: payload
            };
        default:
            return state;
    }
};
export default statisticsReducer;