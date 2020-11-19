import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container, Divider } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  root: {
    marginTop: themes.spacing(5),
    minHeight: "100vh",
  },
  imgContainer: {
    background: "#B0E0E6",
    padding: "0px",
    borderRadius: "60% 20% / 20% 40%",
  },
  image: {
    borderRadius: "60% 20% / 20% 40%",
    width: 400,
    transform: "translate(-15px, 17px)",
    boxShadow: "11px -9px 5px -6px rgba(0,0,0,0.75)",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container id="about" className={classes.root}>
      <Grid container spacing={9} justify="center" alignItems="center">
        <Grid item lg={8} container direction="column" justify="space-between">
          <Grid item>
            <Typography variant="h4">About Me</Typography>
            <br />
            <Divider variant="middle" />
            <br />
          </Grid>
          <Grid item>
            <Typography>
              A little about my background... I grew up in Austin, TX and went
              to college at Case Western Reserve University in Cleveland, OH,
              where i received a BS and Master's in Accountancy. I transitioned
              to a full-time role at a forensic-accounting firm, Meaden & Moore,
              where i worked for two and a half years. Through the daily use of
              Excel formulas and a little VBA, I gained an interest for coding.
              In my spare time I enjoy playing soccer, reading, and cycling.
            </Typography>
          </Grid>
        </Grid>

        <Grid item></Grid>

        <Grid item lg={3} container justify="center">
          <Grid item>
            <div className={classes.imgContainer}>
              <img
                src={`${process.env.PUBLIC_URL}/LinkedInPic_head.jpg`}
                alt="profilepic"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
