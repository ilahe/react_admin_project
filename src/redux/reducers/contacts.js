import {
    DELETE_CONTACT, FIND_CONTACT,
    RETRIEVE_CONTACTS
} from "../actions/types";
const initialState = {
    contacts: [],
    contact: {}
};
function contactsReducer(state = initialState, action) {

    const { type, payload } = action;
    console.log(type,payload)
    switch (type) {
        case RETRIEVE_CONTACTS:
            return payload;
        case FIND_CONTACT:
            return {
                contact: payload
            };
        case DELETE_CONTACT:
            return state.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default contactsReducer;