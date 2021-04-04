import express from 'express';

import { getVideos, likeVideo, dislikeVideo } from '../controllers/videos.js';

const router = express.Router();

router.get('/', getVideos);
router.patch('/:id/likeVideo', likeVideo);
router.patch('/:id/dislikeVideo', dislikeVideo);


export default router;