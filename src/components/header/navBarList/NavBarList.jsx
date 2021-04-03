import React from 'react';
import { AppBar, Link, makeStyles, Typography } from '@material-ui/core';


const navLinks = [
  {
    title: 'MARKET PLACE',
    link: '##'
  },
  {
    title: 'WHOLESALE CENTER',
    link: '##'
  },
  {
    title: 'SELLER CENTER',
    link: '##'
  },
  {
    title: 'SERVICES',
    link: '##'
  },
  {
    title: 'INTERNSHIP',
    link: '##'
  },
  {
    title: 'EVENTS',
    link: '##'
  },
]


const useStyles = makeStyles((theme) => ({
  appBar: {
    textAlign: 'center',
    padding: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  links: {
    '& a': {
      margin: theme.spacing(.7, 2)
    }
  }
}));

const NavBarList = () => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appBar}
      component="nav"
      position="relative" color="inherit">
      <Typography className={classes.links}>
        {navLinks.map(links => (
          <Link color="inherit"
            href={links.link} key={links.title}>
            {links.title}
          </Link>
        ))}
      </Typography>
    </AppBar>
  )
}

export default NavBarList
