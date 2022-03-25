import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { css } from "office-ui-fabric-react";

import {
    NavLink,
    HashRouter
} from "react-router-dom";

import Navigation from "../../../component/Navigation/Navigation";
//icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import TodayIcon from '@material-ui/icons/Today';
import BuildIcon from '@material-ui/icons/Build';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import GavelIcon from '@material-ui/icons/Gavel';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: theme.spacing(1),
            backgroundColor: '#f2f2f2',
            width: '100%',
        },
        homeDiv: {
            marginTop: '50px'
        },
        paperDiv: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(20),
                padding: theme.spacing(2),
            },

        },
        paper: {
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover': {
                color: "#FFF",
                backgroundColor: '#004256',
                '& > *': {
                    color: '#FFF',
                }
            }
        },
        boxDiv: {
            marginLeft: theme.spacing(2)
        },

    }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

export default function AdminHomePage() {
    const classes = useStyles();

    const [openWorkManagement, setOpenWork] = React.useState(false);
    const [openUserManagement, setOpenUser] = React.useState(false);

    const handleUserManagement = () => {
        setOpenUser(!openUserManagement);
    };
    const handleWorkManagement = () => {
        setOpenWork(!openWorkManagement);
    };
    return (
        <div className={classes.root}>

            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <div className={classes.boxDiv}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                    <p className="heading">User Management</p>
                                    <div className={classes.paperDiv}>
                                        <Paper className={classes.paper}>User</Paper>
                                        <Paper className={classes.paper}>Crew</Paper>
                                        <Paper className={classes.paper}>Teams</Paper>
                                        <Paper className={classes.paper}>Department</Paper>
                                        <Paper className={classes.paper}>Roles</Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <p className="heading">Work Management</p>
                                    <div className={classes.paperDiv}>
                                        <Paper className={classes.paper}>Activities</Paper>
                                        <Paper className={classes.paper}>Work Type Fields</Paper>
                                        <Paper className={classes.paper}>Plants</Paper>
                                        <Paper className={classes.paper}>Material</Paper>
                                        <Paper className={classes.paper}>TCP</Paper>
                                        <Paper className={classes.paper}>SWMS</Paper>
                                        <Paper className={classes.paper}>Forms</Paper>
                                        <Paper className={classes.paper}>Prestart Forms</Paper>
                                        <Paper className={classes.paper}>Defect Codes</Paper>
                                        <Paper className={classes.paper}>Defect Questions</Paper>
                                        <Paper className={classes.paper}>Assets Questions</Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <p className="heading">Risk Management</p>
                                    <div className={classes.paperDiv}>
                                        <Paper className={classes.paper}>Risk Categories</Paper>
                                        <Paper className={classes.paper}>Risk Forms</Paper>
                                        <Paper className={classes.paper}>Risk Areas</Paper>
                                        <Paper className={classes.paper}>Risks</Paper>
                                        <Paper className={classes.paper}>Risk Control Measures</Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <p className="heading">Others</p>
                                    <div className={classes.paperDiv}>
                                        <Paper className={classes.paper}>Suburbs</Paper>
                                        <Paper className={classes.paper}>Status</Paper>
                                        <Paper className={classes.paper}>Counters</Paper>
                                        <Paper className={classes.paper}>Priorities</Paper>
                                        <Paper className={classes.paper}>Suppliers</Paper>
                                        <Paper className={classes.paper}>Inventory Location</Paper>
                                        <Paper className={classes.paper}>On Hold Reasons</Paper>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}