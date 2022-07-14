import {
    CREATE_CATEGORY_LINK,
    CREATE_HOROSCOPE_PROPERTY,
    DELETE_CATEGORY_LINK,
    DELETE_HOROSCOPE_PROPERTY,
    EDIT_CATEGORY_LINK, EDIT_HOROSCOPE_PROPERTY, RETRIEVE_CATEGORY_LINK_SELECT,
    RETRIEVE_HOROSCOPE_PROPERTIES, RETRIEVE_HOROSCOPE_PROPERTY_SELECT, RETRIEVE_HOROSCOPES,
    STATUS_CATEGORY_LINK, STATUS_HOROSCOPE_PROPERTY,
    UPDATE_CATEGORY_LINK, UPDATE_HOROSCOPE_PROPERTY
} from "./types";
import HoroscopropertiesService from "../../services/horoscoproperties.service";
import CategoryLinksService from "../../services/categorylinks.service";
import HoroscopeService from "../../services/horoscopes.service";

export const retrieveHoroscopeProperties = (currentPage) => async (dispatch) => {
    try {
        const res = await HoroscopropertiesService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_HOROSCOPE_PROPERTIES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveHoroscopePropertySelect = () => async (dispatch) => {
    try {
        const res = await HoroscopropertiesService.getHoroscopes();
        dispatch({
            type: RETRIEVE_HOROSCOPE_PROPERTY_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createHoroscopeProperties = (data) => async (dispatch) => {
    try {
        const createArray = [];
        const res = await HoroscopropertiesService.create(data);
        const selects = await HoroscopeService.getHoroscopeSelect();
        createArray['mainData'] = res.data;
        createArray['selectData'] = selects.data;
        dispatch({
            type: CREATE_HOROSCOPE_PROPERTY,
            payload: createArray,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteHoroscopeProperties = (id) => async (dispatch) => {
    try {
        await HoroscopropertiesService.remove(id);
        dispatch({
            type: DELETE_HOROSCOPE_PROPERTY,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateHoroscopeProperties = (id, data) => async (dispatch) => {
    try {
        const res = await HoroscopropertiesService.update(id, data);
        dispatch({
            type: UPDATE_HOROSCOPE_PROPERTY,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editHoroscopeProperties = (id) => async (dispatch) => {
    try {

        const editArray = [];
        const res = await HoroscopropertiesService.edit(id);
        const selects = await HoroscopeService.getHoroscopeSelect();
        editArray['mainData'] = res.data;
        editArray['selectData'] = selects.data;
        dispatch({
            type: EDIT_HOROSCOPE_PROPERTY,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const statusHoroscopeProperties = (id, data) => async (dispatch) => {
    try {
        console.log("sal0", id, data)
        const res = await HoroscopropertiesService.status(id, data);
        dispatch({
            type: STATUS_HOROSCOPE_PROPERTY,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const searchHoroscopePropertyApi = (data) => async (dispatch) => {
    try {
        const res = await HoroscopropertiesService.search(data);
        dispatch({
            type: RETRIEVE_HOROSCOPE_PROPERTIES,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};