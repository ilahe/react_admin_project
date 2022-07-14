import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "horoscope-love?page=" + currentPage, { headers: axiosHeader() });
};

const update = (id, data) => {
    return axios.put(API_URL + "horoscope-love/" + id, data, { headers: axiosHeader() });
};

const edit = id => {
    return axios.get(API_URL + "horoscope-love/" + id + "/edit", { headers: axiosHeader() });
};

const search = (data) => {
    return axios.post(API_URL + "search/Horoscope/HoroscopeLove", data, { headers: axiosHeader()});
};

const HoroscopeLoveService = {
    getAll,
    edit,
    update,
    search
};

export default HoroscopeLoveService;