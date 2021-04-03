import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ladingContent from '../../assets/images/landingContent.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  image: {
    height: 400,
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  content: {
    margin: theme.spacing(13, 0, 0, 7),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
    },
  },
  header: {
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
    },
  }
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container>
        <Grid item
          className={classes.content}
        >
          <Typography
            className={classes.header}
            variant="h3" component="h1">
            Amazing <br />
            Experiences from Our  <br /> Wonderful Customers
           </Typography>
          <Typography variant="body1" gutterBottom>
            Here is what customers and vendors are saying about  <br />us, you can share your stories with us too.
           </Typography>
        </Grid>
        <Grid item>
          <img
            className={classes.image}
            src={ladingContent} alt="ladingContent" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Content
