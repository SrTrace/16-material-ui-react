import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
    }
}));

const Post = () => {
    const classes = useStyles();

    return (
        <div>hello</div>
    );
};

export default Post;