import {
    CREATE_CATEGORY_LINK,
    DELETE_CATEGORY_LINK,
    EDIT_CATEGORY_LINK,
    RETRIEVE_CATEGORY_LINK_SELECT,
    RETRIEVE_CATEGORY_LINKS, RETRIEVE_HOROSCOPE_LOVES, STATUS_CATEGORY_LINK,
    UPDATE_CATEGORY_LINK
} from "./types";
import CategoryLinksService from "../../services/categorylinks.service";
import HoroscopeLoveService from "../../services/horoscopeloves.service";

export const retrieveCategoryLinks = (currentPage) => async (dispatch) => {
    try {
        const res = await CategoryLinksService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_CATEGORY_LINKS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createCategoryLink = (data) => async (dispatch) => {
    try {
        const res = await CategoryLinksService.create(data);
        dispatch({
            type: CREATE_CATEGORY_LINK,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveCategoryLinkSelect = () => async (dispatch) => {
    try {
        const res = await CategoryLinksService.getCategories();
        dispatch({
            type: RETRIEVE_CATEGORY_LINK_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteCategoryLink = (id) => async (dispatch) => {
    try {
        await CategoryLinksService.remove(id);
        dispatch({
            type: DELETE_CATEGORY_LINK,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateCategoryLink = (id, data) => async (dispatch) => {
    try {
        const res = await CategoryLinksService.update(id, data);
        dispatch({
            type: UPDATE_CATEGORY_LINK,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editCategoryLink = (id) => async (dispatch) => {
    try {

        const editArray = [];
        const res = await CategoryLinksService.edit(id);
        const selects =  await CategoryLinksService.getCategories();
        editArray['mainData'] = res.data;
        editArray['selectData'] = selects.data;
        dispatch({
            type: EDIT_CATEGORY_LINK,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const statusCategoryLink = (id, data) => async (dispatch) => {
    try {
        const res = await CategoryLinksService.status(id, data);
        dispatch({
            type: STATUS_CATEGORY_LINK,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const searchCategoryLinkApi = (data) => async (dispatch) => {
    try {
        const res = await CategoryLinksService.search(data);
        dispatch({
            type: RETRIEVE_CATEGORY_LINKS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};