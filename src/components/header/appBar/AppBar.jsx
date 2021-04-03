import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Logo } from '../../../assets/images/vasiti-Logo.svg';
import { Button, Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },
  navLinks: {
    textDecoration: 'none',
    '& > a': {
      margin: theme.spacing(0, 1),
      textDecoration: 'none',
    }
  },
  appBar: {
    boxShadow: 'none',
    padding: theme.spacing(1.6),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  signUp: {
    margin: theme.spacing(0, 1),
  }
}));


export default function AppBarView() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.grow}>
      <AppBar position="static"
        className={classes.appBar}
        color="inherit">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Logo />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className={classes.navLinks}>
              <Link underline="hover" href="#" onClick={preventDefault} color="inherit">
                ABOUT
            </Link>
              <Link href="#" onClick={preventDefault} color="inherit">
                STORIES
            </Link>
              <Link href="#" onClick={preventDefault} color="inherit">
                CONTACT
            </Link>
              <Link href="#" onClick={preventDefault} color="inherit">
                LOGIN
            </Link>
              <Button className={classes.signUp}
                variant="contained" color="primary">
                SIGN UP
              </Button>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
