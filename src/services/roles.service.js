import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = () => {
    return axios.get(API_URL + "roles/create", { headers: axiosHeader() });
};

const create = (data) => {
    return axios.post(API_URL + "roles", data, { headers: axiosHeader()});
};

const RolesService = {
    getAll,
    create,
};

export default RolesService;