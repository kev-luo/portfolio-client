import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(themes => ({
  root: {
    minHeight: '100vh'
  }
}))

export default function About() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.root}>
      Hello
    </div>
  )
}
