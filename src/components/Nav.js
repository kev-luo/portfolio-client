import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#17141d",
  },
  toolbar: {
    width: "80%",
    margin: "0 auto",
    '& button': {
      fontFamily: 'Fira Sans, sans-serif',
      transition: "all 0.3s ease 0s",
      color: "#edf0f1",
      "&:hover": {
        color: "#B0E0E6"
      }
    }
  },
  appTitleLink: {
    flexGrow: 1,
  },
  appTitle: {
    fontSize: "1.4rem",
    fontWeight: 300,
  },
  icon: {
    color: "#fff",
    fontsize: "2rem",
  },
  active: {
    borderBottom: "solid 1px #B0E0E6",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className={classes.appTitleLink}
        >
          <Button color="inherit" className={classes.appTitle}>
            KEVIN LUO
          </Button>
        </Link>
        <Link
          activeClass={classes.active}
          to="portfolio"
          spy={true}
          offset={-64}
          smooth={true}
          duration={1000}
        >
          <Button color="inherit">PORTFOLIO</Button>
        </Link>
        <Link
          activeClass={classes.active}
          to="about"
          spy={true}
          offset={-64}
          smooth={true}
          duration={1000}
        >
          <Button color="inherit">ABOUT</Button>
        </Link>
        <Link
          activeClass={classes.active}
          to="contact"
          spy={true}
          offset={-64}
          smooth={true}
          duration={1000}
        >
          <Button color="inherit">CONTACT</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
