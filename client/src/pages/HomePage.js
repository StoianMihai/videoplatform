import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { Container, AppBar, Typography, Grow, Grid, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../actions/videos';
import Videos from '../components/Videos/Videos';
import SearchBox from '../components/SearchBox'
import useStyles from '../styles';

const HomePage = ({ match }) => {
    const keyword = match.params.keyword
    const videos = useSelector((state) => state.videos);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos(keyword));
    }, [dispatch, keyword]);

    return (
        <>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    {keyword && (
                        <Grid className={classes.goBackButton}>
                            <Link href='/'>Go back to Home</Link>
                        </Grid>
                    )}
                    <Typography className={classes.heading} variant="h3" align="center">Like our videos</Typography>
                    <Route render={({ history }) => <SearchBox history={history} />} />

                </AppBar>
                {keyword && videos.length ? (<Grid className={classes.searchTerm}><Typography>We've found the following results for: {keyword}</Typography></Grid>)
                    : keyword && !videos.length ? (
                        <Grid className={classes.searchTerm}><Typography>Sorry we didn't found results for: {keyword}</Typography></Grid>
                    ) : ''}

                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12}>
                                <Videos />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
            <Grid container className={classes.footer}>
                <Grid item xs={4}>
                    <p>Video Platform	&copy; Mihai Stoian</p>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage;