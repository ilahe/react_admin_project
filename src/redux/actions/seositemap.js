import {
    EDIT_SEO_SITEMAP, RETRIEVE_SEO_NEWS,
    RETRIEVE_SEO_SITEMAP,
    UPDATE_SEO_SITEMAP,
} from "./types";
import SeoSitemapService from "../../services/seositemap.service";
import SeoNewsService from "../../services/seonews.service";

export const retrieveSeoSitemap = (currentPage) => async (dispatch) => {
    try {
        const res = await SeoSitemapService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_SEO_SITEMAP,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateSeoSitemap = (id, data) => async (dispatch) => {
    try {
        const res = await SeoSitemapService.update(id, data);
        dispatch({
            type: UPDATE_SEO_SITEMAP,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editSeoSitemap = (id) => async (dispatch) => {
    try {
        const res = await SeoSitemapService.edit(id);
        dispatch({
            type: EDIT_SEO_SITEMAP,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchSeoSitemapApi = (data) => async (dispatch) => {
    try {
        const res = await SeoSitemapService.search(data);
        dispatch({
            type: RETRIEVE_SEO_SITEMAP,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};