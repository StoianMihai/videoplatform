import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler'
import VideosCard from '../modules/videosCard.js'

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
        const cardVideo = await VideosCard.find({ ...keyword });
        res.status(200).json(cardVideo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})

export const updateVideo = async (req, res) => {
    const { id: _id } = req.params;
    const video = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No video with that id');

    const updatedVideo = await VideosCard.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedVideo);
}

export const likeVideo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await VideosCard.findById(id);

    const updatedVideo = await VideosCard.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedVideo);
}
export const dislikeVideo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await VideosCard.findById(id);

    const updatedVideo = await VideosCard.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1 }, { new: true });

    res.json(updatedVideo);
}