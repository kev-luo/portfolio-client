import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import { SiReact, SiNodeDotJs, SiMongodb, SiGraphql } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    flexWrap: "wrap",
    minHeight: "100vh",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
      background: "grey",
      opacity: "0.5",
    },
  },
  exp: {
    fontSize: 20,
    fontWeight: "100px",
  },
}));
export default function Stack() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        My Stack
      </Typography>
      <div className={classes.iconContainer}>
        <Avatar>
          <SiMongodb style={{ color: "green" }} size={35} />
        </Avatar>
        <Avatar>
          <Typography variant="subtitle1" className={classes.exp}>
            ex
          </Typography>
        </Avatar>
        <Avatar>
          <SiReact style={{ color: "#00FFFF" }} size={35} />
        </Avatar>
        <Avatar>
          <SiNodeDotJs style={{ color: "green" }} size={35} />
        </Avatar>
        <Avatar>
          <SiGraphql style={{ color: "#FF1493" }} size={35} />
        </Avatar>
      </div>
    </>
  );
}
