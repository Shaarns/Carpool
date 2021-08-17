import React, { useState } from 'react';
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(5, 0),
    padding: theme.spacing(4, 8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
    },
  },
  backButton: {
    position: 'relative',
    top: 40,
  },
  form: {
    margin: theme.spacing(0, 0),
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(4, 0),
    width: '100px',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  console.log(values);

  const handleSubmit = (event) => {
    event.preventDefault();

    const signUpData = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      password: values.password,
    };
    axios
      .post('http://localhost:5000/api/v1/user/register/', signUpData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container maxWidth='sm'>
        <Grid container className={classes.paper} spacing={1}>
          <Grid item xs={12}>
            <Link href='/' className={classes.backButton}>
              <ArrowBackIcon />
            </Link>
            <Typography align='center' color='textPrimary' variant='h4'>
              Carpool
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.form} align='center'>
            <form onSubmit={handleSubmit} method='POST'>
              <TextField
                className={classes.textField}
                id='name'
                label='Name'
                fullWidth
                value={values.name}
                onChange={handleChange('name')}
                autoComplete='off'
              />
              <TextField
                className={classes.textField}
                id='email'
                label='Email'
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                // onChange={handleChangeEmail}
                autoComplete='off'
              />
              <TextField
                className={classes.textField}
                id='mobile'
                label='Phone No.'
                fullWidth
                value={values.mobile}
                onChange={handleChange('mobile')}
                // onChange={handleChangeEmail}
                autoComplete='off'
              />
              <TextField
                className={classes.textField}
                id='password'
                label='Create Password'
                fullWidth
                type='password'
                value={values.password}
                onChange={handleChange('password')}
                // onChange={handleChangeEmail}
                autoComplete='off'
              />
              <Button
                onSubmit={handleSubmit}
                className={classes.button}
                variant='contained'
                color='primary'
                size='large'
                type='submit'
              >
                Sign Up
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
