import { FETCH_ALL, UPDATE, LIKE } from '../constants/actionTypes';

const videos = (videos = [], action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE:
            return videos.map((video) => (video._id === action.payload._id ? action.payload : video));
        case FETCH_ALL:
            return action.payload
        default:
            return videos
    }
}
export default videos