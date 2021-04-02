import { FETCH_ALL, DISLIKE, LIKE } from '../constants/actionTypes';

const videos = (videos = [], action) => {
    switch (action.type) {
        case LIKE:
        case DISLIKE:
            return videos.map((video) => (video._id === action.payload._id ? action.payload : video));
        case FETCH_ALL:
            return action.payload
        default:
            return videos;
    }
}

export default videos;