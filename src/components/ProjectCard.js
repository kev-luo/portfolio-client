import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((themes) => ({
  root: {
    width: 400,
    background: "rgba(0,0,0,0.5)",
    margin: "1rem",
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#fff",
    fontSize: "1rem",
  },
  icon: {
    color: "#fff",
    "&:hover": {
      color: "#888",
    },
  },
}));

export default function Project({ deployed, description, id, name, repo, skills }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" className={classes.icon}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
