import {
    DELETE_MP3USERS,
    RETRIEVE_MP3USERS, SEARCH_MP3, SEARCH_MP3USERS, STATUS_MP3USERS,
} from "./types";
import Mp3UsersService from "../../services/mp3users.service";
import Mp3Service from "../../services/mp3.service";

export const retrieveMp3Users = (currentType, currentPage) => async (dispatch) => {
    try {
        const res = await Mp3UsersService.getAll(currentType,currentPage);
        dispatch({
            type: RETRIEVE_MP3USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const statusMp3Users = (id, data) => async (dispatch) => {
    try {
        console.log("sal0", id, data)
        const res = await Mp3UsersService.status(id, data);
        dispatch({
            type: STATUS_MP3USERS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteMp3Users = (id) => async (dispatch) => {
    try {
        await Mp3UsersService.remove(id);
        dispatch({
            type: DELETE_MP3USERS,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchMp3UsersApi = (data) => async (dispatch) => {
    try {
        const res = await Mp3UsersService.search(data);
        dispatch({
            type: SEARCH_MP3USERS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};