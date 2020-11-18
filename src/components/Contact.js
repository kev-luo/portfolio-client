import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import  { FormControl, InputAdornment, FormHelperText, Input, TextField, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  form: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}))

export default function Contact() {
  const classes = useStyles();
  return (
    <Container className={classes.root} id="contact">
      <form className={classes.form}>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="Name"
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="Email"
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <TextField
            label="Name"
            multiline
            rows={4}
            variant="outlined"
          />
        </FormControl>
      </form>
    </Container>
  )
}

