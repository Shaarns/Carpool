import { Container, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: '#f1f1f1',
    margin: theme.spacing(10, 0, 0, 0),
    padding: theme.spacing(4, 0, 1, 0),
  },
  footerTitle: {
    margin: theme.spacing(1),
  },
  copyright: {
    marginTop: theme.spacing(3),
  },
}))

const Footer = () => {
  const classes = useStyles()
  const footerContents = [
    {
      title: 'About',
      title1: 'Home',
      title2: 'Login',
      title3: 'SignUp',
    },
    {
      title: 'Privacy',
    },
    {
      title: 'Terms',
    },
  ]
  return (
    <div className={classes.footerContainer}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
            <Link href='/'>
              <Typography variant='h5' color='textSecondary'>
                Carpool
              </Typography>
            </Link>
          </Grid>
          {footerContents.map((footerContent, index) => (
            <Grid
              key={index}
              item
              xs={3}
              md={1}
              className={classes.footerTitle}
            >
              <Link href=' '>
                <Typography variant='body1' color='textSecondary'>
                  {footerContent.title}
                </Typography>
              </Link>
              <Link href=' '>
                <Typography variant='body1' color='textSecondary'>
                  {footerContent.title1}
                </Typography>
              </Link>
              <Link href=' '>
                <Typography variant='body1' color='textSecondary'>
                  {footerContent.title2}
                </Typography>
              </Link>
              <Link href=' '>
                <Typography variant='body1' color='textSecondary'>
                  {footerContent.title3}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.copyright}>
          <Grid item xs={12}>
            <Typography variant='body1' color='textSecondary'>
              @Carpool 2021
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Footer
