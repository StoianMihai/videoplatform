import { useState, useEffect } from "react";

import axios from "axios";

export const useVideos = ({ keyword }) => {
  const [videos, setVideos] = useState(null);
  const url = `${process.env.API_HOSTNAME}/videos`;

  useEffect(() => {
    async function getVideos() {
      const result = await axios.get(url, { params: { keyword: keyword } });
      const data = await result.data;
      if (data) setVideos(data);
    }
    if (!videos) getVideos();
  }, [videos, keyword, url]);
  return { videos };
};

// export const getVideos = () => axios.get(url).then((response) => response.data);

// export const likeVideo = (id) => axios.patch(`${url}/${id}/likeVideo`);
// export const dislikeVideo = (id) => axios.patch(`${url}/${id}/dislikeVideo`);
