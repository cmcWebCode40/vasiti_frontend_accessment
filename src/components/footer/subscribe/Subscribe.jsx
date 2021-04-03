import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import SubscribedBanner from '../../../assets/images/subscribe-banner.svg'
import congratsImg from '../../../assets/images/congratsText.svg'



const useStyles = makeStyles((theme) => ({
  gridContainer: {
    margin: theme.spacing(-1, 0.3),
  },
  formControl: {
    borderRadius: '.5rem',
    width: 'auto',
    display: 'inline-block',
    background: theme.palette.grey[900],
    '& input': {
      border: 'none',
      outline: 'none',
      color: theme.palette.white,
    },
    '& button': {
      background: theme.palette.white,
      margin: theme.spacing(0.8, 0.8, 0, 0),
      '&:hover': {
        background: theme.palette.white,
      }
    },
  },
  content: {
    '&: nth-child(2)': {
      margin: theme.spacing(3, 0),
    }
  },
  image: {},
  title: {
    color: theme.palette.white,
    margin: theme.spacing(2, 0),
  },
  gridItem: {
    margin: theme.spacing(2, 0),
  }
}));


const Subscribe = () => {
  const classes = useStyles();
  return (
    <Grid container
      justify="center"
      spacing={4}
      direction={'row-reverse'}
      className={classes.gridContainer}
    >
      <Grid item md={4} className={classes.content}>
        <Box
          display={'flex'}
          alignItems="center">
          <Typography
            className={classes.title}
            variant="h4" component="h6"
            gutterBottom>
            Be a  member <br />
          of our community
        </Typography>
          <img src={congratsImg} height="50" alt={'member'} />
        </Box>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We’d make sure you’re always first to know what’s <br />
           happening on Vasiti—thus, the world.
        </Typography>
        <form >
          <div className={classes.formControl}>
            <TextField
              id="id-subscribe"
              placeholder="enter your email address"
              variant="outlined"
            />
            <Button
              size="large"
              variant="outlined">
              SUBSCRIBE
            </Button>
          </div>
        </form>
      </Grid>
      <Grid item md={4}
        className={classes.gridItem}>
        <img className={classes.image}
          src={SubscribedBanner}
          alt={'subscribe to vasiti'} />
      </Grid>
    </Grid>
  )
}

export default Subscribe
