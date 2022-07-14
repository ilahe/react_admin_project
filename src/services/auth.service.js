import axios from "axios";
import {API_URL} from "../helpers/url";
const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":"*",
    crossDomain: "true",
    Accept: "*/*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Authorization, X-Auth-Token",
}

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        }, {headers : headers})
        .then((response) => {
            if (response.data.token) {
                console.log(response.data)
                response.data.username = username
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};