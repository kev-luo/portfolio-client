import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(themes => ({
  root: {
    marginTop: themes.spacing(5),
    minHeight: '100vh'
  },
  imgContainer: {
    background: '#B0E0E6',
    padding: '0px',
    borderRadius: '60% 20% / 20% 40%',
  },
  image: {
    borderRadius: '60% 20% / 20% 40%',
    width: 400,
    transform: 'translate(-15px, 17px)',
    boxShadow: '11px -9px 5px -6px rgba(0,0,0,0.75)'
  }
}))

export default function About() {
  const classes = useStyles();
  return (
    <Container id="about" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          Hello
        </Grid>
        <Grid item lg={6}>

        </Grid>
        <Grid item>
          <div className={classes.imgContainer}>
            <img src={`${process.env.PUBLIC_URL}/LinkedInPic_head.jpg`} alt="profilepic" className={classes.image}/>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
