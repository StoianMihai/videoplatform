import axios from 'axios';

const url = 'https://videoplatformdev.herokuapp.com/videos';

export const getVideos = () => {
    return axios.get(url).then((response) => response.data)
}





// export const likeVideo = (id) => axios.patch(`${url}/${id}/likeVideo`);
// export const dislikeVideo = (id) => axios.patch(`${url}/${id}/dislikeVideo`);

