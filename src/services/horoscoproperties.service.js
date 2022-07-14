import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "horoscope-properties?page=" + currentPage, { headers: axiosHeader() });
};

const getHoroscopes = () => {
    return axios.get(API_URL + "horoscope-properties/create", { headers: axiosHeader() });
};


const create = (data) => {
    return axios.post(API_URL + "horoscope-properties", data, { headers: axiosHeader()});
};

const remove = id => {
    return axios.delete(API_URL + "horoscope-properties/" + id, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "horoscope-properties/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "horoscope-properties/" + id + "/edit", { headers: axiosHeader() });
};

const status = (id, data) => {
    return axios.post(API_URL + "horoscope-properties/" + id, {status: data}, { headers: axiosHeader()});
};

const search = (data) => {
    return axios.post(API_URL + "search/Horoscope/HoroscopeLoveProperty", data, { headers: axiosHeader()});
};

const HoroscopropertiesService = {
    getAll,
    getHoroscopes,
    create,
    remove,
    update,
    edit,
    status,
    search
};

export default HoroscopropertiesService;