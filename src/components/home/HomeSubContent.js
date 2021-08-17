import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    boxShadow: '0px 3px 35px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    // boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)',
  },
}));
export default function HomeSubContent() {
  const classes = useStyles();

  const homeSubContents = [
    {
      title: 'Carpool And Ride',
      image: '/images/card1.jpg',
      description:
        'To travel with the lowest fares choose Carpool Share.For a faster travel experience we have Share Express on some fixed routes with zero deviations.Choose your ride and zoom away!',
      indx: 0,
    },
    {
      title: 'Save Money with Carpool',
      image: '/images/main1.jpg',
      description:
        'With Carpool, Travel with People Together, Save money. Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.',
      indx: 1,
    },
  ];
  return (
    <div className={classes.contentContainer}>
      <Container>
        {homeSubContents.map((homeSubContent, index) => (
          <Grid
            style={{ margin: '30px 0' }}
            key={index}
            container
            justifyContent='space-around'
            direction={homeSubContent.indx ? 'row-reverse' : 'row'}
            alignItems='center'
          >
            <Grid item xs={12} sm={5}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  component='img'
                  alt='Traveling'
                  title='Travelling images'
                  height='350'
                  image={homeSubContent.image}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.cardContent}>
              <Typography variant='h4' gutterBottom>
                {homeSubContent.title}
              </Typography>
              <Typography variant='subtitle1'>
                {homeSubContent.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
