import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  signUpLink: {
    fontWeight: 400,
    lineSpacing: 20,
  },
}));

export default function HomeSection4() {
  const classes = useStyles();
  return (
    <section>
      <Container>
        <Link href="/signup">
          <Typography variant="h1" className={classes.signUpLink}>
            <span className="spanSignUp">
              Sign Up <ArrowForwardIcon fontSize="large" />
            </span>
          </Typography>
        </Link>
      </Container>
    </section>
  )
}
