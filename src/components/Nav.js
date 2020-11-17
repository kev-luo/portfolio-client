import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'

const useStyles = makeStyles(theme => ({
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
      <h1 className={classes.appTitle}>Kevin Luo</h1>
      <IconButton>
        <SortIcon className={classes.icon} />
      </IconButton>

      </Toolbar>
    </AppBar>
  )
}
