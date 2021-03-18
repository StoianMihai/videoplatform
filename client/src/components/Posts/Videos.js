import React from 'react';
import { Grid, CircularProgress, Grow } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Video from './Post/Video';
import useStyles from './styles';


const Videos = () => {
    const videos = useSelector((state) => state.videos);
    const classes = useStyles();
    return (
        !videos.length ? <CircularProgress /> : (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {videos.map((video) => (
                        <Grid key={video._id} item xs={12} sm={4}>
                            <Video video={video} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    )
}

export default Videos;