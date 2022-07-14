import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentType, currentPage) => {
    if (currentType === 0) {
        return axios.get(API_URL + "mp3?page=" + currentPage, { headers: axiosHeader() });
    }
    else if (currentType === 1) {
        return axios.get(API_URL + "coming-mp3?page=" + currentPage, { headers: axiosHeader() });
    }
    else {
        return axios.get(API_URL + "deleted-mp3?page=" + currentPage, { headers: axiosHeader() });
    }
};

const remove = id => {
    return axios.delete(API_URL + "mp3/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "mp3/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "mp3/" + id + "/edit", { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/Mp3/Music", data, { headers: axiosHeader()});
};

const Mp3Service = {
    getAll,
    remove,
    edit,
    update,
    search
};

export default Mp3Service;