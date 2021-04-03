import { useState, useEffect } from "react";

import axios from "axios";

const url = "https://videoplatformdev.herokuapp.com/videos";

export const useVideos = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    async function getVideos() {
      const result = await axios.get(url);
      const data = await result.data;
      if (data) setVideos(data);
    }
    getVideos();
  }, [videos]);
  return { videos };
};

// export const getVideos = () => axios.get(url).then((response) => response.data);

// export const likeVideo = (id) => axios.patch(`${url}/${id}/likeVideo`);
// export const dislikeVideo = (id) => axios.patch(`${url}/${id}/dislikeVideo`);
