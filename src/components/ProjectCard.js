import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Link,
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
      color: "#B0E0E6",
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
        <IconButton size="small">
          <a href={repo} target="_blank"><GitHubIcon className={classes.icon}/></a>
        </IconButton>
        <Link color="primary" target="_blank" href={deployed} rel="noopener">
          Deployed Site
        </Link>
      </CardActions>
    </Card>
  );
}
