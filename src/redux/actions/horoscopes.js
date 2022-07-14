import {
    CREATE_HOROSCOPE,
    DELETE_HOROSCOPE, EDIT_HOROSCOPE, FIND_CONTACT, RETRIEVE_AUTHORS,
    RETRIEVE_HOROSCOPE_SELECT,
    RETRIEVE_HOROSCOPES, STATUS_HOROSCOPE, UPDATE_HOROSCOPE,
} from "./types";
import HoroscopeService from "../../services/horoscopes.service";
import AuthorService from "../../services/author.service";

export const retrieveHoroscopes= (currentType, currentPage) => async (dispatch) => {
    try {
        const res = await HoroscopeService.getAll(currentType, currentPage);
        dispatch({
            type: RETRIEVE_HOROSCOPES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createHoroscope = (data) => async (dispatch) => {
    try {
        const res = await HoroscopeService.create(data);
        dispatch({
            type: CREATE_HOROSCOPE,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveHoroscopeSelect= () => async (dispatch) => {
    try {
        const res = await HoroscopeService.getHoroscopeSelect();
        dispatch({
            type: RETRIEVE_HOROSCOPE_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteHoroscope = (id) => async (dispatch) => {
    try {
        await HoroscopeService.remove(id);
        dispatch({
            type: DELETE_HOROSCOPE,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateHoroscope = (id, data) => async (dispatch) => {
    try {
        const res = await HoroscopeService.update(id, data);
        dispatch({
            type: UPDATE_HOROSCOPE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editHoroscope = (id) => async (dispatch) => {
    try {
        const res = await HoroscopeService.edit(id);
        dispatch({
            type: EDIT_HOROSCOPE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const statusHoroscope = (id, data) => async (dispatch) => {
    try {
        const res = await HoroscopeService.setStatus(id, data);
        dispatch({
            type: STATUS_HOROSCOPE,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const searchHoroscopeApi = (data) => async (dispatch) => {
    try {
        const res = await HoroscopeService.search(data);
        dispatch({
            type: RETRIEVE_HOROSCOPES,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
