import {
    CREATE_ROLE,
    RETRIEVE_ROLES,
} from "./types";
import RolesService from "../../services/roles.service";

export const retrieveRoles = () => async (dispatch) => {
    try {
        const res = await RolesService.getAll();
        dispatch({
            type: RETRIEVE_ROLES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createRoles = (data) => async (dispatch) => {
    try {
        const res = await RolesService.create(data);
        dispatch({
            type: CREATE_ROLE,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
