import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "categories?page=" + currentPage, { headers: axiosHeader() });
};

const getCategories = () => {
    return axios.get(API_URL + "categories/create", { headers: axiosHeader() });
};

const create = (data) => {
    console.log("step 3", data)
    return axios.post(API_URL + "categories",data, { headers: axiosHeader()});
};

const remove = id => {
    return axios.delete(API_URL + "categories/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "categories/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "categories/" + id + "/edit", { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/category", data, { headers: axiosHeader()});
};

const CategoriesService = {
    getAll,
    getCategories,
    create,
    remove,
    update,
    edit,
    search
};

export default CategoriesService;