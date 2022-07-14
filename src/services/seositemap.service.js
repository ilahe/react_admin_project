import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "seo-sitemap?page=" + currentPage, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "store-sitemap/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "edit-sitemap/" + id, { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/category", data, { headers: axiosHeader()});
};

const SeoSitemapService = {
    getAll,
    update,
    edit,
    search
};

export default SeoSitemapService;