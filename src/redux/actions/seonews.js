import {
    EDIT_SEO_NEWS, RETRIEVE_AUTHORS,
    RETRIEVE_SEO_NEWS,
    UPDATE_SEO_NEWS,
} from "./types";
import SeoNewsService from "../../services/seonews.service";
import AuthorService from "../../services/author.service";

export const retrieveSeoNews = (currentPage) => async (dispatch) => {
    try {
        const res = await SeoNewsService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_SEO_NEWS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};


export const updateSeoNews = (id, data) => async (dispatch) => {
    try {
        const res = await SeoNewsService.update(id, data);
        dispatch({
            type: UPDATE_SEO_NEWS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editSeoNews = (id) => async (dispatch) => {
    try {
        const res = await SeoNewsService.edit(id);
        dispatch({
            type: EDIT_SEO_NEWS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchSeoNewsApi = (data) => async (dispatch) => {
    try {
        const res = await SeoNewsService.search(data);
        dispatch({
            type: RETRIEVE_SEO_NEWS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
