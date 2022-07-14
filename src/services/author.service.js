import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
     return axios.get(API_URL + "authors?page=" + currentPage, { headers: axiosHeader() });
};

const getAuthors = () => {
    return axios.get(API_URL + "authors/create", { headers: axiosHeader() });
};

const create = (data) => {
    return axios.post(API_URL + "authors", data, { headers: axiosHeader()});
};

const edit = id => {
    return axios.get(API_URL + "authors/" + id + "/edit", { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "authors/" + id, data, { headers: axiosHeader() });
};

const remove = id => {
    return axios.delete(API_URL + "authors/" + id, { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/author", data, { headers: axiosHeader()});
};

const AuthorService = {
    getAll,
    getAuthors,
    create,
    remove,
    update,
    edit,
    search
};

export default AuthorService;