import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
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
      <Collapse in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Welcome Longer Title</h1>
          <Link to="portfolio" smooth={true} offset={-64}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
          </Link>
        </div>
      </Collapse>
    </div>
  )
}
