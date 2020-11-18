import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    background: 'black',
  },
  toolbar: {
    width: '80%',
    margin: '0 auto',
  },
  appTitleLink: {
    flexGrow: 1,
  },
  appTitle: {
    fontWeight: 500,
    fontSize: '1.2rem'
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
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          className={classes.appTitleLink}
        ><Button color="inherit" className={classes.appTitle}>KEVIN LUO</Button></Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        ><Button color="inherit">PORTFOLIO</Button></Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ><Button color="inherit">ABOUT</Button></Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ><Button color="inherit">CONTACT</Button></Link>

      </Toolbar>
    </AppBar>
  )
}
