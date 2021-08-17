import React, { useState, useEffect, useRef } from 'react';
import { Link, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { links } from './data';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(0, 13),
    fontWeight: 500,
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 2),
      display: 'inline',
    },
  },
  navLink: {
    display: 'block',
  },
  toggle: {
    display: 'none',
    zIndex: '9999',
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    [theme.breakpoints.down('800')]: {
      display: 'inline',
    },
  },
}));

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const classes = useStyles();
  const navbarContainer = useRef(null);
  const linksContainer = useRef(null);

  useEffect(() => {
    const linkHeight = linksContainer.current.getBoundingClientRect().height;
    if (toggleNavbar) {
      navbarContainer.current.style.height = `${linkHeight}px`;
    } else {
      navbarContainer.current.style.height = '0px';
    }
  }, [toggleNavbar]);

  return (
    <section className='nav-bar-container'>
      <div className='header'>
        <Link href='/' className={classes.link} underline='none'>
          <Typography variant='h5' className={classes.title}>
            Carpool
          </Typography>
        </Link>
        <div className='nav-bar' ref={navbarContainer}>
          <div className='nav-link' ref={linksContainer}>
            {links.map((link) => {
              return (
                <div className='link' key={link.id}>
                  <Link href={link.url} className={classes.navLink}>
                    <Typography variant='body1'>{link.text}</Typography>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MenuIcon
        onClick={() => setToggleNavbar(!toggleNavbar)}
        className={`${classes.toggle}`}
      />
    </section>
  );
};
export default Header;
