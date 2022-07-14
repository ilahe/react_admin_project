import {
    RETRIEVE_SEO_GOOGLE, RETRIEVE_SEO_GOOGLE_DELETE, RETRIEVE_SEO_GOOGLE_INDEX, RETRIEVE_SEO_GOOGLE_INSERT,
} from "./types";
import SeoGoogleIndexService from "../../services/seogoogleindex.service";

export const retrieveSeoGoogle = (currentPage) => async (dispatch) => {
    try {
        const res = await SeoGoogleIndexService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_SEO_GOOGLE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveSeoGoogleIndex = (id, currentPage) => async (dispatch) => {
    try {
        const editArray = [];
        const mainData = await SeoGoogleIndexService.getAll(currentPage);
        const indexData = await SeoGoogleIndexService.getStatusIndex(id);
        editArray['mainData'] = mainData.data;
        editArray['indexData'] = indexData.data;
        dispatch({
            type: RETRIEVE_SEO_GOOGLE_INDEX,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveSeoGoogleInsert = (id, currentPage) => async (dispatch) => {
    try {
        const insertArray = [];
        const mainData = await SeoGoogleIndexService.getAll(currentPage);
        const insertData = await SeoGoogleIndexService.getInsertIndex(id);
        insertArray['mainData'] = mainData.data;
        insertArray['insertData'] = insertData.data;
        dispatch({
            type: RETRIEVE_SEO_GOOGLE_INSERT,
            payload: insertArray,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveSeoGoogleDelete = (id, currentPage) => async (dispatch) => {
    try {
        const deleteArray = [];
        const mainData = await SeoGoogleIndexService.getAll(currentPage);
        const deleteData = await SeoGoogleIndexService.getDeleteIndex(id);
        deleteArray['mainData'] = mainData.data;
        deleteArray['deleteData'] = deleteData.data;
        dispatch({
            type: RETRIEVE_SEO_GOOGLE_DELETE,
            payload: deleteArray,
        });
    } catch (err) {
        console.log(err);
    }
};