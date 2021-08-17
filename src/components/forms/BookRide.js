import React, { useState } from 'react';
import { Paper, TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 440,
    padding: theme.spacing(3, 3),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 17px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  textFieldBox: {
    margin: theme.spacing(18, 12),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(15, 4),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 10),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0),
    },
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  dateField: {
    margin: theme.spacing(2, 0, 4, 0),
  },
}));

const BookRide = () => {
  const classes = useStyles();
  const currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .substr(0, 19);

  const [values, setValues] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    requiredSeats: '',
    dateTime: currentDate,
  });

  const handleChange = (event) => {
    const name = event.target.id;
    setValues({ ...values, [name]: event.target.value });
  };
  console.log(values);

  const handleSubmitBook = (event) => {
    event.preventDefault();

    // const bookRideData = {
    //   pickUpLocation: values.pickUpLocation,
    //   dropOffLocation: values.dropOffLocation,
    //   requiredSeats: values.requiredSeats,
    //   dateTime: values.dateTime,
    // };

    axios
      .get('http://localhost:5000/api/v1/offer-ride')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // setValues({
    //   pickUpLocation: '',
    //   dropOffLocation: '',
    //   requiredSeats: '',
    //   dateTime: '',
    // });
    // window.location = '/availablerides';
  };

  return (
    <Paper className={classes.paper}>
      <form method='POST' onSubmit={handleSubmitBook}>
        <TextField
          id='pickUpLocation'
          value={values.pickUpLocation}
          className={classes.textField}
          label='PickUp Location'
          onChange={handleChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='dropOffLocation'
          label='DropOff Location'
          value={values.dropOffLocation}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id='requiredSeats'
          className={classes.textField}
          label='Required Seats'
          type='number'
          value={values.requiredSeats}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id='dateTime'
          label='Date and Time'
          type='datetime-local'
          value={values.dateTime}
          onChange={handleChange}
          fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          // href='/availablerides'
          className='main_card_button'
          color='primary'
          variant='contained'
          type='submit'
          onSubmit={handleSubmitBook}
          disableElevation
        >
          <span className='span'>Book A Ride</span>
        </Button>
      </form>
    </Paper>
  );
};
export default BookRide;
