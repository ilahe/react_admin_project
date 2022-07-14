import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import authors from "./authors";
import users from "./users";
import categories from "./categories";
import mp3 from "./mp3";
import mp3users from "./mp3users";
import horoscopes from "./horoscopes";
import news from "./news";
import logs from "./logs";
import horoscopeloves from "./horoscopeloves";
import horoscopeproperties from "./horoscopeproperties";
import contacts from "./contacts";
import categorylinks from "./categorylinks";
import seonews from "./seonews";
import seositemap from "./seositemap";
import seogoogleindex from "./seogoogleindex";
import videos from "./videos";
import statistics from "./statistics";
import roles from "./roles";

export default combineReducers({
    auth,
    message,
    authors,
    users,
    categories,
    categorylinks,
    mp3,
    mp3users,
    horoscopes,
    horoscopeloves,
    horoscopeproperties,
    news,
    logs,
    contacts,
    seonews,
    seositemap,
    seogoogleindex,
    videos,
    statistics,
    roles
});