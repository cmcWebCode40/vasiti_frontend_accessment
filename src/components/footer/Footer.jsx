import React from 'react';
import { makeStyles } from '@material-ui/core';
import FooterLinks from './footerLinks/FooterLinks';
import Subscribe from './subscribe/Subscribe';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    background: theme.palette.black
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Subscribe />
      <FooterLinks />
    </div>
  )
}

export default Footer
