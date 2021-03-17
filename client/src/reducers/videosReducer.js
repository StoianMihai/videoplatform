import { FETCH_ALL, UPDATE, DISLIKE, LIKE } from '../constants/actionTypes';

const videosReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE:
        case DISLIKE:
            return { videos: action.payload };
        case FETCH_ALL:
            return action.payload
        default:
            return state;
    }
}

export default videosReducer;