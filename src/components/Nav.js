import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
  },
  toolbar: {
    width: '80%',
    margin: '0 auto',
  },
  appTitle: {
    flexGrow: 1,
  },
  icon: {
    color: '#fff',
    fontsize: '2rem'
  }
}))

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.appTitle}>
          KEVIN LUO
        </Typography>
        <Scroll to="portfolio" smooth={true} >
          <Button color="inherit">PORTFOLIO</Button>
        </Scroll>
        <Scroll to="about" smooth={true} >
          <Button color="inherit">ABOUT</Button>
        </Scroll>
        <Scroll to="contact" smooth={true}>
          <Button color="inherit">CONTACT</Button>
        </Scroll>
      </Toolbar>
    </AppBar>
  )
}
