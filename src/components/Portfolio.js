import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard';

const useStyles = makeStyles(themes => ({
  root: {
    height: '100vh',

  }
}))

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProjectCard />
    </div>
  )
}
