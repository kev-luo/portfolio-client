import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(themes => ({
  root: {
    height: '100vh'
  }
}))

export default function Contact() {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      Hello Again
    </div>
  )
}
