import React, { useState, useEffect } from 'react';
import {
  Paper,
  Container,
  Grid,
  Typography,
  makeStyles,
  Link,
} from '@material-ui/core';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundImage: `url(${
      process.env.PUBLIC_URL + '/images/main_home_img.jpg'
    })`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      height: 'auto',
      padding: theme.spacing(12, 2, 12, 2),
    },
  },
  section: {
    marginTop: theme.spacing(4),
  },
  heading: {
    letterSpacing: '0.08rem',
    margin: theme.spacing(4, 0),
  },

  paper: {
    margin: theme.spacing(0, 0),
    padding: theme.spacing(2),
    boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
  },
  cardLink: {
    margin: theme.spacing(1, 0),
    fontSize: '1.1rem',
    color: '#4895ef',
    fontWeight: 700,
  },
  rideData: {
    textTransform: 'capitalize',
  },
}));

export default function AvailableRides() {
  const classes = useStyles();
  const [availableRides, setAvailableRides] = useState([]);
  const placeholders = [
    'Pick Up Location',
    'Drop off Location',
    'Price',
    'Availble Seats',
    'Date And Time',
  ];

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/offer-ride')
      .then((res) => {
        setAvailableRides(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(availableRides);

  return (
    <section className={classes.root}>
      <Container className={classes.section} maxWidth='lg'>
        <Typography variant='h4' align='center' className={classes.heading}>
          Available Rides
        </Typography>
        <Grid container spacing={4}>
          {availableRides.length > 0 ? (
            availableRides.map((rides) => {
              return (
                <Grid item xs={12} md={4}>
                  <Paper className={classes.paper} elevation={5}>
                    <Grid container>
                      <Grid item xs={4} md={6}>
                        {placeholders.map((placeholder, index) => {
                          return (
                            <Typography
                              variant='body1'
                              gutterBottom
                              key={index}
                            >
                              {placeholder}
                            </Typography>
                          );
                        })}
                      </Grid>
                      <Grid item xs={8} md={6} className={classes.rideData}>
                        <Typography variant='body2' gutterBottom>
                          {rides.pickUpLocation}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          {rides.dropOffLocation}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          Rs {rides.price}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          {rides.pickUpLocation}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          {rides.updatedAt.substring(0, 16)}
                        </Typography>
                      </Grid>
                      <Link
                        href=' '
                        className={classes.cardLink}
                        onClick={(e) => e.preventDefault()}
                      >
                        Book Now
                      </Link>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })
          ) : (
            <Typography variant='h5' align='center' gutterBottom>
              No Ride Available!
            </Typography>
          )}
        </Grid>
      </Container>
    </section>
  );
}
