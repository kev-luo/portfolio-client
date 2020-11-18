import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse, Avatar, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-scroll';
import { SiReact, SiNodeDotJs, SiMongodb, SiGraphql } from 'react-icons/si'

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
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
      background: 'grey',
      opacity: '0.5'
    }
  },
  exp: {
    fontSize: 20,
    fontWeight: '100px'
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
          <h1 className={classes.title}>Welcome</h1>
          <div className={classes.iconContainer}>
            <Avatar>
              <SiMongodb style={{color: 'green'}} size={35}/>
            </Avatar>
            <Avatar>
              <Typography variant="subtitle1" className={classes.exp}>ex</Typography>
            </Avatar>
            <Avatar>
              <SiReact style={{color: 'blue'}} size={35}/>
            </Avatar>
            <Avatar>
              <SiNodeDotJs style={{color: 'green'}} size={35}/>
            </Avatar>
            <Avatar>
              <SiGraphql style={{color: 'pink'}} size={35}/>
            </Avatar>
          </div>
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
