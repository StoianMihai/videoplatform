import axios from 'axios';

const url = 'https://videoplatformdev.herokuapp.com:5000/videos';


export const fetchVideos = ({ keyword }) => axios.get(url, { params: { keyword: keyword } });
export const updateVideo = (id, updatedVideo) => axios.patch(`${url}/${id}`, updatedVideo);
export const likeVideo = (id) => axios.patch(`${url}/${id}/likeVideo`);
export const dislikeVideo = (id) => axios.patch(`${url}/${id}/dislikeVideo`);