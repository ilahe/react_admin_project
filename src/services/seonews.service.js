import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
   return axios.get(API_URL + "seo-news?page=" + currentPage, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "seo-news/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "seo-news/" + id + "/edit", { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/News/NewsArchive", data, { headers: axiosHeader()});
};

const SeoNewsService = {
    getAll,
    update,
    edit,
    search
};

export default SeoNewsService;