import React from 'react';
import {makeStyles, alpha} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItem: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    input: {
        color: "white",
        marginLeft:  theme.spacing(1)
    },
    searchButton: {
        marginRight: theme.spacing(2)
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                   SrTrace
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                   SrT
                </Typography>
                <div className={classes.search}>
                    <SearchIcon/>
                    <InputBase placeholder="Search..." className={classes.input}/>
                </div>
                <div className={classes.icons}>
                    <SearchIcon className={classes.searchButton}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon />
                    </Badge>
                     <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar alt="icalgo" src="data:image/jpeg;base64,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" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;