import React from 'react';
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player/youtube'

import { likeVideo, dislikeVideo } from '../../../actions/videos';
import useStyles from './styles';



const Video = ({ video }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <ReactPlayer url={video.videoUrl} width='100%' />
            <Typography className={classes.title} variant="h5" gutterBottom>{video.title}</Typography>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeVideo(video._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {video.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(dislikeVideo(video._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Dislike &nbsp;
                    {video.dislikeCount}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Video;