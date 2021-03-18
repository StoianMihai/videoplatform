import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    title: String,
    videoUrl: String,
    likeCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CardVideos = mongoose.model('Video', videoSchema);

export default CardVideos;