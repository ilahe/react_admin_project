import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentType, currentPage) => {
    if (currentType === 0) {
        return axios.get(API_URL + "news?page=" + currentPage, { headers: axiosHeader() });
    }
    else {
        console.log("else", currentType);
        return axios.get(API_URL + "news-type/" + currentType + "?page=" + currentPage, { headers: axiosHeader() });
    }
};

const getNewsSelects = () => {
    return axios.get(API_URL + "news/create", { headers: axiosHeader() });
};

const search = (type, data) => {
    if ((type === 5) || (type === 6)) {
        return axios.post(API_URL + "search/news/newsArchive", data, { headers: axiosHeader()});
    }
    else {
        return axios.post(API_URL + "search/news/news", data, { headers: axiosHeader()});
    }
};

const NewsService = {
    getAll,
    getNewsSelects,
    search
};

export default NewsService;