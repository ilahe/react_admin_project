import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentType, currentPage) => {
    if (currentType === 0) {
        return axios.get(API_URL + "mp3-users?page=" + currentPage, { headers: axiosHeader() });
    }
    else {
        return axios.get(API_URL + "mp3-blocked-users?page=" + currentPage, { headers: axiosHeader() });
    }
};

const remove = id => {
    return axios.delete(API_URL + "mp3-users/" + id, { headers: axiosHeader() });
};

const status = (id, data) => {
    return axios.post(API_URL + "mp3-status-or-block", {id: id, status: data}, { headers: axiosHeader()});
};

const search = (data) => {
    return axios.post(API_URL + "search/Mp3/Mp3Users", data, { headers: axiosHeader()});
};

const Mp3UsersService = {
    getAll,
    remove,
    status,
    search
};

export default Mp3UsersService;