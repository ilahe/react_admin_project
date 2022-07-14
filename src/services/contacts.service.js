import axios from "axios";
import axiosHeader from "../helpers/axios-header";
import {API_URL} from "../helpers/url";

const getAll = (currentPage) => {
    return axios.get(API_URL + "contacts?page=" + currentPage, { headers: axiosHeader() });
};

const get = id => {
    console.log("in here id", id)
    return axios.get(API_URL + "contacts/" + id, { headers: axiosHeader() });
};

const remove = id => {
    return axios.delete(API_URL + "contacts/" + id, { headers: axiosHeader() });
};

const ContactsService = {
    getAll,
    get,
    remove
};

export default ContactsService;