import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles(themes => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [themes.breakpoints.down('xs')]: {
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
    // <div className={classes.root} id="portfolio">
    <Container id="portfolio" >
    <Grid wrap container spacing={0} justify="center" >
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
        <Grid item lg={3} >
          <ProjectCard checked={checked}/>
        </Grid>
      </Grid>
      </Container>
    // </div>
  )
}
