import * as React from 'react';
import {
    NavLink
} from "react-router-dom";
// let this.meetingsList: any = [];
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
//     HomeContainer:{
//         display: 'flex',
//   flexWrap: 'nowrap',
//   overFlowX: 'auto',
//   webkitOverFlowScrolling: 'touch',
//     },
//     HomeContainerGrid:{
//         flex: '0 0 auto',
//     }
}));
const cards = [1, 2, 3, 4,5,6,7];

export default function HomePage() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="lg">
                <div className="HomeContent" dir="ltr">
                   
                    <div className="categoryList">
                        <div className="category">All</div>
                        <div className="category">Music</div>
                        <div className="category">Singing</div>
                        <div className="category">Painting</div>
                        <div className="category">Dancing</div>
                        <div className="category">Acting</div>
                    </div>
                    <hr />
                    <div>
                        {/* End hero unit */}


                        <div className="categoryDiv">
                            <span className="categoryTitle"> Music</span>
                        </div>
                       
                        <Grid container spacing={4} className={"HomeContainer"}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={3} className={"HomeContainerGrid"}>
                                    <NavLink to="/Video">
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <h3>Parady of marron 5 Girls like you</h3>
                                                <Chip
                                                    className="chip"
                                                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                    label="Akil Momin"
                                                    variant="outlined"
                                                />
                                            </CardContent>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                        <div className="categoryDiv">
                            <span className="categoryTitle"> Painting</span>
                        </div>
                             <Grid container spacing={4}  className={"HomeContainer"}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={3}  className={"HomeContainerGrid"}>
                                    <NavLink to="/Video">
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <h3>Parady of marron 5 Girls like you</h3>
                                                <Chip
                                                    className="chip"
                                                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                    label="Akil Momin"
                                                    variant="outlined"
                                                />
                                            </CardContent>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                        <div className="categoryDiv">
                            <span className="categoryTitle"> Singing</span>
                        </div>
                        <Grid container spacing={4}  className={"HomeContainer"}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={3} className={"HomeContainerGrid"}>
                                    <NavLink to="/Video">
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <h3>Parady of marron 5 Girls like you</h3>
                                                <Chip
                                                    className="chip"
                                                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                    label="Akil Momin"
                                                    variant="outlined"
                                                />
                                            </CardContent>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                         
                        <div className="categoryDiv">
                            <span className="categoryTitle"> Dance</span>
                        </div>
                        <Grid container spacing={4}  className={"HomeContainer"}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={3} className={"HomeContainerGrid"}>
                                    <NavLink to="/Video">
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <h3>Parady of marron 5 Girls like you</h3>
                                                <Chip
                                                    className="chip"
                                                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                    label="Akil Momin"
                                                    variant="outlined"
                                                />
                                            </CardContent>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>

            </Container>
            </React.Fragment>

    );
}

