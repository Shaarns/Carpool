import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ButtonBase, Paper } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LanguageIcon from '@material-ui/icons/Language';
import UpdateIcon from '@material-ui/icons/Update';

const pexels = 'https://source.unsplash.com/random';
const useStyles = makeStyles((theme) => ({
  mainWidth: {
    minWidth: '400px',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: '100% 65%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(12, 0, 12),
    marginBottom: theme.spacing(0),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5, 5, 5, 5),
    margin: 'auto',
    borderRadius: '10px',
  },
  teacherProfile: {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
  },
  subpaper: {
    padding: theme.spacing(2),
  },
  image: {
    width: 150,
    height: 190,
  },
  img: {
    margin: 'auto',
    height: '100%',
    display: 'block',
    width: '100%',
    borderRadius: '10px',
  },
  aboutContainer: {
    margin: theme.spacing(4),
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  return (
    <main className={classes.mainWidth}>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth='md'>
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
              <Grid container spacing={4} className={classes.teacherProfile}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt='complex' src={pexels} />
                  </ButtonBase>
                </Grid>
                <Grid item sm container>
                  <Grid item xs container direction='column' spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant='h4'>
                        Kumar Saini <CheckCircleIcon color='primary' />
                      </Typography>
                      <Typography variant='body2' color='primary' gutterBottom>
                        #1 Educator in Physics · IIT JEE
                      </Typography>
                      <Typography
                        variant='body1'
                        color='textSecondary'
                        gutterBottom
                      >
                        B.Tech- IIT Delhi, 13+ years teaching exp for IIT-JEE,
                        senior physics faculty at Bansal class kota, Etoos,
                        Allen and Vibrant academy Kota, #IITian | B.Tech- IIT
                        Delhi, 13+ years teaching exp for IIT-JEE, senior
                        physics faculty at Bansal class kota, Etoos, Allen and
                        Vibrant academy Kota,
                      </Typography>
                      <hr />
                      <Grid
                        item
                        container
                        spacing={2}
                        direction='column'
                        className={classes.heroButtons}
                      >
                        <Grid item xs={12}>
                          <Typography variant='body2' gutterBottom>
                            Educators Highlights
                          </Typography>
                        </Grid>
                        <Typography variant='body2' gutterBottom>
                          <CheckCircleIcon fontSize='small' /> 13+ years
                          Experience
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          <CastForEducationIcon fontSize='small' /> Education:
                          IIT Roorkee (B.Tech.) • 2008 - 2012
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          <LocationOnIcon fontSize='small' /> Lives in Jaipur
                          Rajasthan
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          <UpdateIcon fontSize='small' /> Gyanacharya Educator
                          since 29th April, 2021
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          <LiveTvIcon fontSize='small' /> 1,209,729 live minutes
                          taught in last 30 days
                        </Typography>
                        <Typography variant='body2'>
                          <LanguageIcon fontSize='small' /> Knows Hindi and
                          English
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={6} className={classes.heroButtons}>
                      <Grid item>
                        <Typography variant='subtitle2'>
                          65M Watch mins
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle2'>
                          5k Followers{' '}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle2'>
                          65M Watchtime
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle2'>
                          65M Watchtime
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Container>
      </div>
    </main>
  );
};
export default UserProfile;
