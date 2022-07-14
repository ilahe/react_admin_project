import {
    DELETE_HOROSCOPE,
    EDIT_HOROSCOPE,
    RETRIEVE_HOROSCOPE_SELECT,
    RETRIEVE_HOROSCOPES, SEARCH_CATEGORY, SEARCH_HOROSCOPE, UPDATE_HOROSCOPE
} from "../actions/types";
const initialState = {
    horoscopes: [],
    horoscopeSelect: [],
    horoscope: {}
};
function horoscopesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_HOROSCOPES:
            return {
                horoscopes: payload
            };
        case SEARCH_HOROSCOPE:
            return {
                horoscopes: payload
            };
        case RETRIEVE_HOROSCOPE_SELECT:
            return {
                horoscopeSelect: payload
            };
        case EDIT_HOROSCOPE:
            return {
                horoscope: payload
            };
        case UPDATE_HOROSCOPE:
            return state.map((horoscope) => {
                if (horoscope.id === payload.id) {
                    return {
                        ...horoscope,
                        ...payload,
                    };
                } else {
                    return horoscope;
                }
            });
        case DELETE_HOROSCOPE:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default horoscopesReducer;