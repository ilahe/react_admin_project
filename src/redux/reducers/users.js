import {
    DELETE_USER, EDIT_USER, RETRIEVE_USER_SELECT,
    RETRIEVE_USERS, SEARCH_USER, UPDATE_USER
} from "../actions/types";
const initialState = {
    users: [],
    userSelect: [],
    user: {}
};
function usersReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_USERS:
            return {
                users: payload
            };
        case SEARCH_USER:
            return {
                users: payload
            };
        case RETRIEVE_USER_SELECT:
            return {
                userSelect: payload
            };
        case EDIT_USER:
            return {
                userSelect: payload.selectData,
                user: payload.mainData
            };
        case UPDATE_USER:
            return state.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });
        case DELETE_USER:
            return payload.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};
export default usersReducer;