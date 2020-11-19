import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "50ch",
    "&:focus": {
      borderColor: "#B0E0E6",
    },
  },
  paper: {
    transform: "translateY(40px)",
    padding: theme.spacing(2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B0E0E6",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "#B0E0E6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B0E0E6",
      },
    },
  },
})(TextField);

export default function Contact() {
  const classes = useStyles();
  return (
    <Container className={classes.root} id="contact">
      <Paper className={classes.paper}>
        <Typography className={classes.margin} variant="h4">
          Contact Me
        </Typography>
        <form className={classes.form}>
          <CssTextField
            label="Name"
            className={clsx(classes.margin, classes.textField)}
          />
          <CssTextField
            label="Email"
            className={clsx(classes.margin, classes.textField)}
          />
          <CssTextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            className={classes.margin}
            fullWidth
          />
          <Button className={classes.margin}>Send</Button>
        </form>
      </Paper>
    </Container>
  );
}
