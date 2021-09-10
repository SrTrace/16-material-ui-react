import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
    }
}));

const Rightbar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            RightBar
        </Container>
    );
};

export default Rightbar;