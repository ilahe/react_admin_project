import {
    RETRIEVE_ROLES
} from "../actions/types";
const initialState = {
    roles: []
};
function rolesReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_ROLES:
            return {
                roles: payload
            };
        default:
            return state;
    }
};
export default rolesReducer;