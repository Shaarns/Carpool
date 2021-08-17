import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
  TextField,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: theme.spacing(5, 0),
    padding: theme.spacing(6, 8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
    },
  },
  backButton: {
    position: 'relative',
    top: 40,
  },
  form: {
    margin: theme.spacing(2, 0),
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(3, 0),
    width: '100px',
  },
}));

export default function EnterOtp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    otp: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    alert('email ' + values.otp + ' pass ' + values.password);
    event.preventDefault();
  };

  return (
    <div>
      <Container maxWidth='sm'>
        <Grid container className={classes.paper} spacing={1}>
          <Grid item xs={12}>
            <Link href='/signup' className={classes.backButton}>
              <ArrowBackIcon />
            </Link>
            <Typography align='center' color='textPrimary' variant='h4'>
              Carpool
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <form onSubmit={handleSubmit} method='POST'>
              <TextField
                className={classes.textField}
                id='Otp'
                label='Enter 4-digit OTP'
                fullWidth
                value={values.otp}
                onChange={handleChange('otp')}
                // onChange={handleChangeEmail}
                autoComplete='off'
              />
              <FormControl fullWidth>
                <InputLabel htmlFor='password'>Create Pin</InputLabel>
                <Input
                  className={classes.textField}
                  id='password'
                  type={values.showPassword ? 'text' : 'password'}
                  onChange={handleChange('password')}
                  value={values.password}
                  // onChange={handleChangePass}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
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
