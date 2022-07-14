import {
    RETRIEVE_LOGS,
    DELETE_LOG, RETRIEVE_AUTHORS, SEARCH_LOG,
} from "./types";
import LogsService from "../../services/logs.service";
import AuthorService from "../../services/author.service";

export const retrieveLogs = (currentPage) => async (dispatch) => {
    try {
        const res = await LogsService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_LOGS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteLog = (id) => async (dispatch) => {
    try {
        await LogsService.remove(id);
        dispatch({
            type: DELETE_LOG,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchLogApi = (data) => async (dispatch) => {
    try {
        const res = await LogsService.search(data);
        dispatch({
            type: RETRIEVE_LOGS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
