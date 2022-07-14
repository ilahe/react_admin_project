import {
    CREATE_VIDEO, DELETE_VIDEO,
    RETRIEVE_VIDEOS,
} from "./types";
import VideosService from "../../services/videos.service";

export const retrieveVideos = (currentPage) => async (dispatch) => {
    try {
        const res = await VideosService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_VIDEOS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createVideo = (data) => async (dispatch) => {
    try {
        const res = await VideosService.create(data);
        dispatch({
            type: CREATE_VIDEO,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteVideo = (id) => async (dispatch) => {
    try {
        await VideosService.remove(id);
        dispatch({
            type: DELETE_VIDEO,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

