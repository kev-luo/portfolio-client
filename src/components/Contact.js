import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

import { useForm } from '../hooks/useForm';
import { CREATE_MESSAGE } from '../utils/graphql';

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
  const [errors, setErrors] = useState({});
  const initialState = {
    name:'',
    email:'',
    body:'',
  }
  const { onChange, onSubmit, values, setValues } = useForm(createMessageCb, initialState);

  const [createMessage] = useMutation(CREATE_MESSAGE, {
    variables: values,
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    update() {
      setValues(initialState)
      setErrors({})
    }
  })
  
  function createMessageCb() {
    createMessage();
  }

  return (
    <Container className={classes.root} id="contact">
      <Paper className={classes.paper}>
        <Typography className={classes.margin} variant="h4">
          Contact Me
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <CssTextField
            label="Name"
            name="name"
            value={values.name}
            error={errors.name ? true : false}
            helperText={errors.name}
            onChange={onChange}
            className={clsx(classes.margin, classes.textField)}
          />
          <CssTextField
            label="Email"
            name="email"
            value={values.email}
            error={errors.email ? true : false}
            helperText={errors.email}
            onChange={onChange}
            className={clsx(classes.margin, classes.textField)}
          />
          <CssTextField
            label="Message"
            name="body"
            value={values.body}
            error={errors.body ? true : false}
            helperText={errors.body}
            onChange={onChange}
            multiline
            rows={4}
            variant="outlined"
            className={classes.margin}
            fullWidth
          />
          <Button type="submit" className={classes.margin}>Send</Button>
        </form>
      </Paper>
    </Container>
  );
}
