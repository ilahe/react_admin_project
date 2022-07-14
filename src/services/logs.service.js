import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "logs?page=" + currentPage, { headers: axiosHeader() });
};

const remove = id => {
    return axios.delete(API_URL + "logs/" + id, { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/log", data, { headers: axiosHeader()});
};

const LogsService = {
    getAll,
    remove,
    search
};

export default LogsService;