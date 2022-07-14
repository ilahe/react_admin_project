import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentType, currentPage) => {
    if (currentType === "0") {
        return axios.get(API_URL + "horoscopes?page=" + currentPage, { headers: axiosHeader() });
    }
    else {
        return axios.get(API_URL + "horoscopes-type/" + currentType + "?page=" + currentPage, { headers: axiosHeader() });
    }
};

const create = data => {
    return axios.post(API_URL + "horoscopes",data, { headers: axiosHeader()});
};

const getHoroscopeSelect = id => {
    return axios.get(API_URL + "horoscopes/create", { headers: axiosHeader() });
};

const remove = id => {
    return axios.delete(API_URL + "horoscopes/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "horoscopes/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "horoscopes/" + id + "/edit", { headers: axiosHeader() });
};

const setStatus = (id, data) => {
    return axios.post(API_URL + "horoscopes-status/" + id, {status: data}, { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/Horoscope/HoroscopeContent", data, { headers: axiosHeader()});
};

const HoroscopeService = {
    getAll,
    create,
    getHoroscopeSelect,
    remove,
    update,
    edit,
    search,
    setStatus
};

export default HoroscopeService;