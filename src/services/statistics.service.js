import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "statistics?page=" + currentPage, { headers: axiosHeader() });
};

const getType = (type, id) => {
    return axios.get(API_URL + "statistics/" + type + "/" + id, { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/user", data, { headers: axiosHeader()});
};


const StatisticsService = {
    getAll,
    getType,
    search
};

export default StatisticsService;