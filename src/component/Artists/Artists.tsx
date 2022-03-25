import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import profilePic from '../../assets/profilePic.jpeg';
import ArtistBackground from '../../assets/ArtistBackground.jpg';

import MusicNote from '@material-ui/icons/MusicNote';
import Theaters from '@material-ui/icons/Theaters';
import Brush from '@material-ui/icons/Brush';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Artist() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={"ArtistHeroContent"}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={10} md={10}>
                            <div className="ATMHeroContent">
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Artist of the Week
            </Typography>
                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.
            </Typography>
                                <div className={classes.heroButtons}>
                                    <Grid container spacing={2} justify="center">
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Main call to action
                  </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="primary">
                                                Secondary action
                  </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2}>
                            <div className="ATMHeroBoxes">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="ATMBox">
                                            <h3 className={"ATMName"}>Music</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="ATMBox">
                                            <h3 className={"ATMName"}>Art</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="ATMBox">
                                            <h3 className={"ATMName"}>Dance</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="ATMBox">
                                            <h3 className={"ATMName"}>Acting</h3>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </div>
            <Container maxWidth="md">
                <div className="ArtistContentGrid">
                    <Grid container className="ArtistGrids" >
                        <Grid item xs={12} sm={3} md={2}>
                            <div className="ATMContentBox">
                                <div className={"ATMPicDiv"}>
                                <MusicNote className={"trendingIcon"} />
                                    <h3 className={"trendingName"}>Music</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMFeaturedDiv"}>
                                    <img src={ArtistBackground} className="ATMFeatured" alt="pic" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMDescriptionDiv"}>
                                    <h3>This video is about</h3>
                                <p>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.  </p>
                                    <Button variant="outlined" color="primary">  View More </Button>
                                </div>
                            </div>
                        </Grid>                        
                    </Grid>
                    <Grid container className="ArtistGrids">
                        <Grid item xs={12} sm={3} md={2}>
                            <div className="ATMContentBox">
                                <div className={"ATMPicDiv"}>
                                <Brush className={"trendingIcon"} />
                                    <h3 className={"trendingName"}>Art</h3>                           
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMFeaturedDiv"}>
                                    <img src={ArtistBackground} className="ATMFeatured" alt="pic" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMDescriptionDiv"}>
                                    <h3>This video is about</h3>
                                <p>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.  </p>
                                    <Button variant="outlined" color="primary">  View More </Button>
                                </div>
                            </div>
                        </Grid>
                        
                    </Grid>
                    <Grid container className="ArtistGrids">
                        <Grid item xs={12} sm={3} md={2}>
                            <div className="ATMContentBox">
                                <div className={"ATMPicDiv"}>
                                <DirectionsRun className={"trendingIcon"} />
                                    <h3 className={"trendingName"}>Dance</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMFeaturedDiv"}>
                                    <img src={ArtistBackground} className="ATMFeatured" alt="pic" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMDescriptionDiv"}>
                                    <h3>This video is about</h3>
                                <p>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.  </p>
                                    <Button variant="outlined" color="primary">  View More </Button>
                                </div>
                            </div>
                        </Grid>
                        
                    </Grid>
                    <Grid container className="ArtistGrids">
                        <Grid item xs={12} sm={3} md={2}>
                            <div className="ATMContentBox">
                                <div className={"ATMPicDiv"}>
                                <Theaters className={"trendingIcon"} />
                                    <h3 className={"trendingName"}>Acting</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMFeaturedDiv"}>
                                    <img src={ArtistBackground} className="ATMFeatured" alt="pic" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <div className="ATMContentBox">
                                <div className={"ATMDescriptionDiv"}>
                                    <h3>This video is about</h3>
                                <p>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.  </p>
                                    <Button variant="outlined" color="primary">  View More </Button>
                                </div>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>

            </Container>

        </React.Fragment>
    );
}