import {
    EDIT_CATEGORY_LINK, EDIT_HOROSCOPE_LOVES,
    RETRIEVE_HOROSCOPE_LOVES, RETRIEVE_HOROSCOPES, UPDATE_CATEGORY_LINK, UPDATE_HOROSCOPE_LOVES
} from "./types";
import HoroscopeLoveService from "../../services/horoscopeloves.service";
import CategoryLinksService from "../../services/categorylinks.service";
import HoroscopeService from "../../services/horoscopes.service";

export const retrieveHoroscopeLoves= (currentPage) => async (dispatch) => {
    try {
        const res = await HoroscopeLoveService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_HOROSCOPE_LOVES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateHoroscopeLoves = (id, data) => async (dispatch) => {
    try {
        const res = await HoroscopeLoveService.update(id, data);
        dispatch({
            type: UPDATE_HOROSCOPE_LOVES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editHoroscopeLoves = (id) => async (dispatch) => {
    try {
        const editArray = [];
        const res = await HoroscopeLoveService.edit(id);
        const selects = await HoroscopeService.getHoroscopeSelect();
        editArray['mainData'] = res.data;
        editArray['selectData'] = selects.data;
        dispatch({
            type: EDIT_HOROSCOPE_LOVES,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchHoroscopeLoveApi = (data) => async (dispatch) => {
    try {
        const res = await HoroscopeLoveService.search(data);
        dispatch({
            type: RETRIEVE_HOROSCOPE_LOVES,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};