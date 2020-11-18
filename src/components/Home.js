import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from './Header';
import Portfolio from './Portfolio';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/background_.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
      <Header />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}
