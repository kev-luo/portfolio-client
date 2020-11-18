import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectCard from './ProjectCard';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles(themes => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [themes.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    flexWrap: 'wrap',
    minHeight: '100vh'
  }
}))

export default function Portfolio() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="portfolio">
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
      <ProjectCard checked={checked}/>
    </div>
  )
}
