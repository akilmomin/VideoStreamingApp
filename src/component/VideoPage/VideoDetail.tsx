import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    NavLink
} from "react-router-dom";
// let this.meetingsList: any = [];
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
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
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Video() {
    const classes = useStyles();
    // export default class Home extends React.Component<any, any> {

    //     public render(): React.ReactElement<any> {
    return (
        <Container component="main" maxWidth="lg">
            <br />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <ReactPlayer
                        className={"VideoPlaye"}
                        url='https://www.youtube.com/watch?v=B-6yJL0kdE8'
                        playIcon
                        // playing
                        controls={true}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid container spacing={2}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={12}>
                                <NavLink to="/Video">
                                    <Grid container>
                                        {/* <Card className={classes.card}> */}
                                            <Grid item key={card} xs={4} sm={4} md={4}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random"
                                                    title="Image title"
                                                />
                                            </Grid>
                                            <Grid item key={card} xs={8} sm={8} md={8}>
                                                <CardContent className={"cardContent"}>
                                                    <span className={"videoTitle"}>Parady of marron 5 Girls like you</span><br />
                                                    <span className={"videoArtist"}>Akil Momin</span>
                                                </CardContent>
                                            </Grid>
                                        {/* </Card> */}
                                    </Grid>
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
    // }
}