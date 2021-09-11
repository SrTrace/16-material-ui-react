import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    card: {
      marginBottom: theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    }
}));

const Post = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">My First Post</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iste minima odit perspiciatis repudiandae. Corporis cumque delectus fugiat laborum necessitatibus nihil, possimus qui sit! Atque distinctio est iure quo similique?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque aut cumque debitis dignissimos doloremque expedita inventore ipsum laudantium nemo nesciunt officiis perferendis, provident quae reiciendis sit vero voluptatibus.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Post;