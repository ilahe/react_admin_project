import {
    RETRIEVE_SEO_NEWS,
    RETRIEVE_STATISTIC_TYPE,
    RETRIEVE_STATISTICS
} from "./types";
import StatisticsService from "../../services/statistics.service";
import SeoNewsService from "../../services/seonews.service";

export const retrieveStatistics = (currentPage) => async (dispatch) => {
    try {
        const res = await StatisticsService.getAll(currentPage);
        dispatch({
            type: RETRIEVE_STATISTICS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveStatisticType = (type, id) => async (dispatch) => {
    try {
        const res = await StatisticsService.getType(type, id);
        dispatch({
            type: RETRIEVE_STATISTIC_TYPE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const searchStatisticsApi = (data) => async (dispatch) => {
    try {
        const res = await StatisticsService.search(data);
        dispatch({
            type: RETRIEVE_STATISTICS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
