import {
    RETRIEVE_CATEGORIES, RETRIEVE_CATEGORY_LINK_SELECT,
    RETRIEVE_NEWS, RETRIEVE_NEWS_SELECT, SEARCH_NEWS,
} from "./types";
import NewsService from "../../services/news.service";
import CategoryLinksService from "../../services/categorylinks.service";
import SeoGoogleIndexService from "../../services/seogoogleindex.service";

export const retrieveNews= (currentType, currentPage) => async (dispatch) => {
    try {
        const res = await NewsService.getAll(currentType, currentPage);
        dispatch({
            type: RETRIEVE_NEWS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveNewsSelect = () => async (dispatch) => {
    try {
        const res = await NewsService.getNewsSelects();
        dispatch({
            type: RETRIEVE_NEWS_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchNewsApi = (type, data) => async (dispatch) => {
    try {
        const res = await NewsService.search(type, data);
        dispatch({
            type: SEARCH_NEWS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};