import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles(themes => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export default function Portfolio() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root}>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
    </div>
  )
}
