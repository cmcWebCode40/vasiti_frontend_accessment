import React, { Fragment } from 'react';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { careers, company, GetInTouch, products, socialLinks } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0.4),
  },
  link: {
    display: 'block',
    color: theme.palette.white,
    margin: theme.spacing(1, 0),
    fontSize: theme.typography.pxToRem('12')
  }
  ,
  gridContainer: {
    margin: theme.spacing(-1, 3),
  },
  ftHeader: {
    color: theme.palette.white,
  },
  socialLinks: {
    margin: theme.spacing(1, 0),
    '& >*': {
      margin: theme.spacing(1, 'auto'),
    }
  }
}));


const FooterLinks = () => {
  const classes = useStyles();
  return (
    <Grid container
      spacing={4}
      className={classes.root}
    >
      <Grid item md={2}>
        <Typography className={classes.ftHeader} variant="h6" >
          Company
        </Typography>
        {company.map(list => (
          <Link className={classes.link}
            key={list.title} href={list.link}>
            {list.title}
          </Link>
        ))}

      </Grid>
      <Grid item md={2}>
        <Typography className={classes.ftHeader}
          variant="h6" >
          Products
        </Typography>
        {products.map(list => (
          <Link className={classes.link}
            key={list.title} href={list.link}>
            {list.title}
          </Link>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography className={classes.ftHeader}
          variant="h6" >
          Careers
        </Typography>
        {careers.map(list => (
          <Link className={classes.link}
            key={list.title} href={list.link}>
            {list.title}
          </Link>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography className={classes.ftHeader}
          variant="h6" >
          Get In Touch
        </Typography>
        {GetInTouch.map(list => (
          <Link className={classes.link}
            key={list.title} href={list.link}>
            {list.title}
          </Link>
        ))}
      </Grid>
      <Grid className={classes.socialLinks} item md={2}>
        <Typography className={classes.ftHeader}
          variant="h6" >
          Join Our Community
        </Typography>
        {socialLinks.map(list => (
          <Fragment key={list.title}>
            {list.icon}
          </Fragment>
        ))}
        <Typography className={classes.ftHeader}
          variant="h6" >
          Email Newsletter
          </Typography>
      </Grid>
    </Grid>
  )
}

export default FooterLinks
