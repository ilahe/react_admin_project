import {
    EDIT_CATEGORY_LINK, EDIT_HOROSCOPE_LOVES,
    RETRIEVE_HOROSCOPE_LOVES, SEARCH_HOROSCOPE_LOVE, UPDATE_CATEGORY_LINK, UPDATE_HOROSCOPE_LOVES
} from "../actions/types";
const initialState = {
    horoscopeLoves: [],
    horoscopeLoveSelect: [],
    horoscopeLove: {}
};
function horoscopeLoveReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_HOROSCOPE_LOVES:
            return {
                horoscopeLoves: payload
            };
        case SEARCH_HOROSCOPE_LOVE:
            return {
                horoscopeLoves: payload
            };
        case EDIT_HOROSCOPE_LOVES:
            return {
                horoscopeLoveSelect: payload.selectData,
                horoscopeLove: payload.mainData
            };
        case UPDATE_HOROSCOPE_LOVES:
            return state.map((horoscopeLove) => {
                if (horoscopeLove.id === payload.id) {
                    return {
                        ...horoscopeLove,
                        ...payload,
                    };
                } else {
                    return horoscopeLove;
                }
            });
        default:
            return state;
    }
};
export default horoscopeLoveReducer;