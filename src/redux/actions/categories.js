import {
    CREATE_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, RETRIEVE_AUTHORS,
    RETRIEVE_CATEGORIES,
    RETRIEVE_CATEGORY_SELECT, UPDATE_HOROSCOPE,
} from "./types";
import CategoriesService from "../../services/category.service";
import AuthorService from "../../services/author.service";

export const retrieveCategories = (currentPage) => async (dispatch) => {
    try {
        const res = await CategoriesService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_CATEGORIES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createCategory = (data) => async (dispatch) => {
    try {
        const res = await CategoriesService.create(data);
        dispatch({
            type: CREATE_CATEGORY,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveCategorySelect = () => async (dispatch) => {
    try {
        const res = await CategoriesService.getCategories();
        dispatch({
            type: RETRIEVE_CATEGORY_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await CategoriesService.remove(id);
        dispatch({
            type: DELETE_CATEGORY,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateCategory = (id, data) => async (dispatch) => {
    try {
        const res = await CategoriesService.update(id, data);
        dispatch({
            type: UPDATE_HOROSCOPE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editCategory = (id) => async (dispatch) => {
    try {
        const res = await CategoriesService.edit(id);
        dispatch({
            type: EDIT_CATEGORY,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchCategoryApi = (data) => async (dispatch) => {
    try {
        const res = await CategoriesService.search(data);
        dispatch({
            type: RETRIEVE_CATEGORIES,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
