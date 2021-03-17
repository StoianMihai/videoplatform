import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'
import CardVideo from '../modules/videosCard.js'

export const getVideos = asyncHandler(async (req, res) => {

    try {
        const keyword = req.query.keyword
            ? {
                title: {
                    $regex: req.query.keyword,
                    $options: 'i',
                },
            }
            : {}
        const cardVideo = await CardVideo.find({ ...keyword });
        res.status(200).json(cardVideo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})

export const updateVideo = asyncHandler(async (req, res) => {
    const { id: _id } = req.params;
    const video = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No video with that id');

    const updatedVideo = await CardVideo.findByIdAndUpdate(_id, { ...video, _id }, { new: true });
    res.json(updatedVideo);
})

export const likeVideo = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const video = await CardVideo.findById(id);

    const updatedVideo = await CardVideo.findByIdAndUpdate(id, { likeCount: video.likeCount + 1 }, { new: true });

    res.json(updatedVideo);
})

export const dislikeVideo = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const video = await CardVideo.findById(id);

    const updatedVideo = await CardVideo.findByIdAndUpdate(id, { dislikeCount: video.dislikeCount + 1 }, { new: true });

    res.json(updatedVideo);
})