import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "users?page=" + currentPage, { headers: axiosHeader() });
};

const getRoles = () => {
    return axios.get(API_URL + "users/create", { headers: axiosHeader() });
};

const create = (data) => {
    return axios.post(API_URL + "users", data, { headers: axiosHeader()});
};

const remove = id => {
    return axios.delete(API_URL + "users/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "users/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "users/" + id + "/edit", { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/user", data, { headers: axiosHeader()});
};


const UserService = {
    getAll,
    getRoles,
    create,
    remove,
    update,
    edit,
    search
};

export default UserService;