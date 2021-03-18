import { FETCH_ALL, UPDATE, LIKE, DISLIKE } from '../constants/actionTypes';

import * as api from '../api';

// Action Creators

export const getVideos = (keyword = '') => async (dispatch) => {

    try {
        const config = {
            headers: {
                'Content-Type': 'text/html'
            }
        }
        const { data } = await api.fetchVideos({ keyword }, config);

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateVideo = (id, video) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'text/html'
            }
        }
        const { data } = await api.updateVideo(id, video, config);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error)
    }
}

export const likeVideo = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'text/html'
            }
        }
        const { data } = await api.likeVideo(id, config);

        dispatch({ type: LIKE, payload: data });

    } catch (error) {
        console.log(error);
    }
}
export const dislikeVideo = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'text/html'
            }
        }
        const { data } = await api.dislikeVideo(id, config);

        dispatch({ type: DISLIKE, payload: data });

    } catch (error) {
        console.log(error);
    }
}