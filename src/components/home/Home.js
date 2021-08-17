import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BookRide from '../forms/BookRide';
import OfferRide from '../forms/OfferRide';
import './home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundImage: `url(${
      process.env.PUBLIC_URL + '/images/main_home_img.jpg'
    })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      padding: theme.spacing(12, 2, 12, 2),
    },
  },
  mainTitle: {
    position: 'relative',
    justify: 'center',
    [theme.breakpoints.down('md')]: {},
  },
  paper: {
    width: 440,
    padding: theme.spacing(3, 3),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 17px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  textFieldBox: {
    margin: theme.spacing(14, 12),
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

const Home = () => {
  const [tab, setTab] = useState(false);
  const classes = useStyles();
  const myTab = () => {
    const header = document.getElementById('home-tab');
    const btns = header.getElementsByClassName('tab-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  };
  useEffect(() => {
    myTab();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container justifyContent='space-evenly'>
          <Grid item md className={classes.textFieldBox}>
            <Typography
              variant='h3'
              color='primary'
              className={classes.mainTitle}
              gutterBottom
            >
              Ride Together Today
            </Typography>
            <Typography variant='body2' className={classes.mainTitle}>
              Choose from a range of categories and prices
            </Typography>
          </Grid>
          <Grid item md className={classes.textFieldBox}>
            <div id='home-tab'>
              <Typography
                variant='subtitle2'
                className='tab-btn active'
                onClick={() => setTab(false)}
              >
                Book Ride
              </Typography>
              <Typography
                variant='subtitle2'
                className='tab-btn'
                onClick={() => setTab(true)}
              >
                Offer Ride
              </Typography>
            </div>
            {tab ? <OfferRide /> : <BookRide />}
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
