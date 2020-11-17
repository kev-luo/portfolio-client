import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Nav from './Nav';
import Portfolio from './Portfolio';

const useStyles = makeStyles(them => ({
  root: {
    minHeight: '100vh',
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
      <Portfolio />
    </div>
  )
}
