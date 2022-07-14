import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "seo-google?page=" + currentPage, { headers: axiosHeader() });
};

const getStatusIndex = (id, currentPage) => {
    return axios.get(API_URL + "seo-google-index/" + id, { headers: axiosHeader() });
};

const getInsertIndex = (id, currentPage) => {
    return axios.get(API_URL + "seo-google-insert/" + id, { headers: axiosHeader() });
};

const getDeleteIndex = (id, currentPage) => {
    return axios.get(API_URL + "seo-google-delete/" + id, { headers: axiosHeader() });
};

const SeoGoogleIndexService = {
    getAll,
    getStatusIndex,
    getInsertIndex,
    getDeleteIndex
};

export default SeoGoogleIndexService;