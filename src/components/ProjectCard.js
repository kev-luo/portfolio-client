import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((themes) => ({
  root: {
    maxWidth: 550,
    background: "rgba(0,0,0,0.5)",
    margin: '1rem',
  },
  media: {
    height: 350,
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#fff",
    fontSize: "1.1rem",
  },
  icon: {
    color: '#fff',
    '&:hover': {
      color: '#888'
    }
  }
}));

export default function Project({checked}) {
  const classes = useStyles();
  return (
    <Collapse in={checked} style={{ transformOrigin: '0 0 0'}} {...(checked ? { timeout: 700 } : {})}>
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
            Magnificent Larry
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p"
            className={classes.description}
          >
            Lizards are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" className={classes.icon}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Collapse>
  );
}
