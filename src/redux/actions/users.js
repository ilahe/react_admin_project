import {
    CREATE_USER, DELETE_USER, EDIT_USER, RETRIEVE_USER_SELECT,
    RETRIEVE_USERS, UPDATE_USER
} from "./types";
import UserService from "../../services/user.service";

export const retrieveUsers = (currentPage) => async (dispatch) => {
    try {
        const res = await UserService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createUsers = (data) => async (dispatch) => {
    try {
        const res = await UserService.create(data);
        dispatch({
            type: CREATE_USER,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveUserSelect = () => async (dispatch) => {
    try {
        const res = await UserService.getRoles();
        dispatch({
            type: RETRIEVE_USER_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await UserService.remove(id);
        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await UserService.update(id, data);
        dispatch({
            type: UPDATE_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editUser = (id) => async (dispatch) => {
    try {

        const editArray = [];
        const res = await UserService.edit(id);
        const selects =  await UserService.getRoles();
        editArray['mainData'] = res.data;
        editArray['selectData'] = selects.data;
        dispatch({
            type: EDIT_USER,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchUserApi = (data) => async (dispatch) => {
    try {
        const res = await UserService.search(data);
        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};