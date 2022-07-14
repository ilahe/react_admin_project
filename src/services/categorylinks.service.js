import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "category-links?page=" + currentPage, { headers: axiosHeader() });
};

const getCategories = () => {
    return axios.get(API_URL + "category-links/create", { headers: axiosHeader() });
};

const create = (data) => {
    return axios.post(API_URL + "category-links", data, { headers: axiosHeader()});
};

const remove = id => {
    return axios.delete(API_URL + "category-links/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "category-links/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "category-links/" + id + "/edit", { headers: axiosHeader() });
};

const status = (id, data) => {
    return axios.post(API_URL + "category-links-status/" + id, {status: data}, { headers: axiosHeader()});
};

const search = (data) => {
    return axios.post(API_URL + "search/CategoryRelated", data, { headers: axiosHeader()});
};

const CategoryLinksService = {
    getAll,
    getCategories,
    create,
    remove,
    update,
    edit,
    status,
    search
};

export default CategoryLinksService;