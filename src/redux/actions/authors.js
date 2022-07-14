import {
    CREATE_AUTHOR,
    DELETE_AUTHOR, EDIT_AUTHOR, RETRIEVE_AUTHOR_SELECT,
    RETRIEVE_AUTHORS, SEARCH_AUTHOR, UPDATE_AUTHOR,
} from "./types";
import AuthorService from "../../services/author.service";

export const retrieveAuthors = (currentPage) => async (dispatch) => {
    try {
        const res = await AuthorService.getAll(currentPage);
        console.log("bbb:",res.data);
        dispatch({
            type: RETRIEVE_AUTHORS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createAuthor = (data) => async (dispatch) => {
    try {
        const res = await AuthorService.create(data);
        dispatch({
            type: CREATE_AUTHOR,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const searchAuthorApi = (data) => async (dispatch) => {
    try {
        const res = await AuthorService.search(data);
        dispatch({
            type: RETRIEVE_AUTHORS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveAuthorSelect = () => async (dispatch) => {
    try {
        const res = await AuthorService.getAuthors();
        dispatch({
            type: RETRIEVE_AUTHOR_SELECT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAuthor = (id) => async (dispatch) => {
    try {
        await AuthorService.remove(id);
        dispatch({
            type: DELETE_AUTHOR,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateAuthor = (id, data) => async (dispatch) => {
    try {
        const res = await AuthorService.update(id, data);
        dispatch({
            type: UPDATE_AUTHOR,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editAuthor = (id) => async (dispatch) => {
    try {

        const editArray = [];
        const res = await AuthorService.edit(id);
        const selects =  await AuthorService.getAuthors();
        editArray['mainData'] = res.data;
        editArray['selectData'] = selects.data;
        dispatch({
            type: EDIT_AUTHOR,
            payload: editArray,
        });
    } catch (err) {
        console.log(err);
    }
};