import { FETCH_ALL, UPDATE, LIKE, DISLIKE } from '../constants/actionTypes';

import * as api from '../api';

// Action Creators

export const getVideos = (keyword = '') => async (dispatch) => {

    try {

        const { data } = await api.fetchVideos({ keyword });

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateVideo = (id, video) => async (dispatch) => {
    try {

        const { data } = await api.updateVideo(id, video);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error)
    }
}

export const likeVideo = (id) => async (dispatch) => {
    try {

        const { data } = await api.likeVideo(id);

        dispatch({ type: LIKE, payload: data });

    } catch (error) {
        console.log(error);
    }
}
export const dislikeVideo = (id) => async (dispatch) => {
    try {

        const { data } = await api.dislikeVideo(id);

        dispatch({ type: DISLIKE, payload: data });

    } catch (error) {
        console.log(error);
    }
}