import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "video?page=" + currentPage, { headers: axiosHeader() });
};

const create = (data) => {
    return axios.post(API_URL + "video", data, { headers: axiosHeader()});
};

const remove = id => {
    return axios.delete(API_URL + "video/" + id, { headers: axiosHeader() });
};

const VideosService = {
    getAll,
    create,
    remove
};

export default VideosService;