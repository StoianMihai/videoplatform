import { useState, useEffect } from "react";

import axios from "axios";

export const useLike = (id) => {
    const [likeCount, setLikeCount] = useState(null);
    const url = `${process.env.API_HOSTNAME}/videos`;

    useEffect(() => {
        async function likeVideo() {
            const result = await axios.patch(`${url}/${id}/likeVideo`);
            const data = await result.data;
            if (data) setLikeCount(data.likeCount);
        }
        if (!likeCount) likeVideo();
    }, [id, likeCount, url]);
    return { likeCount };
};

// export const likeVideo = (id) => axios.patch(`${url}/${id}/likeVideo`);
