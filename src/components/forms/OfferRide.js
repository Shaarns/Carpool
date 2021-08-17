import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Box,
  makeStyles,
  InputAdornment,
} from '@material-ui/core';
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

const OfferRide = ({ tab }) => {
  const classes = useStyles();
  const currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .substr(0, 19);

  const [values, setValues] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    price: '',
    availableSeats: '',
    dateTime: currentDate,
  });

  const handleChange = (event) => {
    const name = event.target.id;
    setValues({ ...values, [name]: event.target.value });
  };
  console.log(values);

  const handleSubmitOffer = (event) => {
    event.preventDefault();

    const offerRideData = {
      pickUpLocation: values.pickUpLocation,
      dropOffLocation: values.dropOffLocation,
      price: values.price,
      availableSeats: values.availableSeats,
      dateTime: values.dateTime,
    };

    axios
      .post('http://localhost:5000/api/v1/offer-ride/add', offerRideData)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Paper className={classes.paper}>
      <form>
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

        <Box>
          <TextField
            id='price'
            className={classes.textField}
            label='Price'
            type='number'
            value={values.price}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>Rs</InputAdornment>
              ),
            }}
          />
          <TextField
            id='availableSeats'
            className={classes.textField}
            label='Available Seats'
            value={values.availableSeats}
            type='number'
            max='3'
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <TextField
          id='dateTime'
          label='Date and Time'
          type='datetime-local'
          defaultValue={currentDate}
          onChange={handleChange}
          fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          className={'main_card_button'}
          color='primary'
          variant='contained'
          onClick={handleSubmitOffer}
          disableElevation
        >
          <span className='span'>Offer A Ride</span>
        </Button>
      </form>
    </Paper>
  );
};
export default OfferRide;
