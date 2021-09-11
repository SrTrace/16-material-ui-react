import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: 20,
        right: 20,
    },
}));

const Add = () => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);

    return (
        <div>
            <Tooltip title="Add"
                     aria-label="add"
                     onClick={() => setOpen(true)}
            >
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default Add;