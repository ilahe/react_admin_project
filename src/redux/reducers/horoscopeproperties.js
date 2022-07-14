import {
    DELETE_HOROSCOPE_PROPERTY,
    EDIT_HOROSCOPE_PROPERTY,
    RETRIEVE_HOROSCOPE_PROPERTIES,
    RETRIEVE_HOROSCOPE_PROPERTY_SELECT,
    SEARCH_HOROSCOPE_PROPERTY,
    UPDATE_HOROSCOPE_PROPERTY
} from "../actions/types";
const initialState = {
    horoscopeProperties: [],
    horoscopePropertySelect: [],
    horoscopeProperty: {}
};
function horoscopePropertiesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_HOROSCOPE_PROPERTIES:
            return {
                horoscopeProperties: payload
            };
        case SEARCH_HOROSCOPE_PROPERTY:
            return {
                horoscopeProperties: payload
            };
        case RETRIEVE_HOROSCOPE_PROPERTY_SELECT:
            return {
                horoscopePropertySelect: payload
            };
        case EDIT_HOROSCOPE_PROPERTY:
            return {
                horoscopePropertySelect: payload.selectData,
                horoscopeProperty: payload.mainData
            };
        case UPDATE_HOROSCOPE_PROPERTY:
            return state.map((horoscopeProperty) => {
                if (horoscopeProperty.id === payload.id) {
                    return {
                        ...horoscopeProperty,
                        ...payload,
                    };
                } else {
                    return horoscopeProperty;
                }
            });
        case DELETE_HOROSCOPE_PROPERTY:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default horoscopePropertiesReducer;