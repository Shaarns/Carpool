import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: theme.spacing(12, 0, 10, 0),
  },
  root: {
    // marginTop: theme.spacing(12),
    borderRadius: 2,
  },
  cardMedia: {
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
  },
  cardContent: {
    textAlign: 'justify',
    padding: theme.spacing(2, 2, 1, 1),
  },
}));

export default function HomeContent() {
  const classes = useStyles();
  const cardData = [
    {
      id: 1,
      title: 'Travel Together',
      description:
        'Travel together with new people. Carpools are available 24/7' +
        'you can book any time and travel at an instant.',
      image: '/images/homeContent.jpg',
    },
    {
      id: 2,
      title: 'Outstation',
      description:
        'Travel  outstation with new people. Carpools are ' +
        'also available for outstations, carpooling are ' +
        'available from wide range of prices categories.',
      image: '/images/outstation.jpg',
    },
    {
      id: 3,
      title: 'Rent',
      description:
        'We also provide the facility to take cars on rent,' +
        'you can book any time and travel at an instant.',
      image: '/images/homeContent2.jpg',
    },
  ];
  const preventDefault = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.contentContainer}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h4' className={classes.heading}>
              Whenever You Want
            </Typography>
          </Grid>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cardMedia}
                  component='img'
                  alt='Traveling'
                  height='170'
                  image={card.image}
                  title='Travelling images'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography component='p' variant='body1'>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <Link href=' ' className='cardLink' onClick={preventDefault}>
                    Book Now
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
