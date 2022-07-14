import {
    DELETE_MP3,
    EDIT_MP3,
    RETRIEVE_MP3, SEARCH_MP3, SEARCH_NEWS,
    UPDATE_MP3
} from "./types";
import Mp3Service from "../../services/mp3.service";
import CategoryLinksService from "../../services/categorylinks.service";
import NewsService from "../../services/news.service";

export const retrieveMp3 = (currentType, currentPage) => async (dispatch) => {
    try {
        const res = await Mp3Service.getAll(currentType, currentPage);
        dispatch({
            type: RETRIEVE_MP3,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteMp3 = (id) => async (dispatch) => {
    try {
        await Mp3Service.remove(id);
        dispatch({
            type: DELETE_MP3,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateMp3 = (id, data) => async (dispatch) => {
    try {
        const res = await Mp3Service.update(id, data);
        dispatch({
            type: UPDATE_MP3,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editMp3 = (id) => async (dispatch) => {
    try {
        const res = await Mp3Service.edit(id);
        dispatch({
            type: EDIT_MP3,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchMp3Api = (data) => async (dispatch) => {
    try {
        const res = await Mp3Service.search(data);
        dispatch({
            type: SEARCH_MP3,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};