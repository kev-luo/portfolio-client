import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
  },
  titleContainer: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '3rem'
  },
  goDown: {
    color: '#fff',
    fontSize: '3rem',
  }
}))

export default function Nav() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, [])
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
        <h1 className={classes.appTitle}>Kevin Luo</h1>
        <IconButton>
          <SortIcon className={classes.icon} />
        </IconButton>

        </Toolbar>
      </AppBar>
      <Collapse in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Welcome Longer Title</h1>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
        </div>
      </Collapse>
    </div>
  )
}
