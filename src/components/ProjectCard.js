import React from "react";
import {
  Link,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

import './ProjectCard.css';

const useStyles = makeStyles((themes) => ({
  icon: {
    color: "#fff",
    marginRight: themes.spacing(2),
    "&:hover": {
      color: "#B0E0E6",
    },
  },
}));

export default function Project({ deployed, description, name, repo, skills }) {
  const classes = useStyles();
  console.log(skills);
  return (
    <div className="flip-card portfolioCard">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{name}</h3>
          <hr />
          <ul>
            {skills.map(skill => {
              return <li>{skill.name}</li>
            })}
          </ul>
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
          <IconButton size="small">
            <a href={repo} target="_blank" rel="noreferrer"><GitHubIcon className={classes.icon}/></a>
          </IconButton>
          <Link color="primary" target="_blank" href={deployed} rel="noreferrer">
            Deployed Site
          </Link>
        </div>
      </div>
    </div>
  );
}