import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CustomChip from '../CustomChip';


const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(3),
  },
  gridContainer: {
    flexGrow: 1,
    margin: theme.spacing(3),
    '& >*': {
      // margin: theme.spacing(0, .4),
    }
  },
  content: {
    margin: theme.spacing(0),
    maxWidth: 500
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },
  title: {
    fontWeight: 700
  }
}));


const Experience = ({
  img,
  userStory,
  reverse,
  color,
  onAddStory
}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}
      style={{
        background: color === 'dark' ? '#222222' : '#FFF8F5',
        color: color === 'dark' ? '#fff' : '#000'
      }}>
      <Grid container
        direction={reverse ? 'row-reverse' : 'row'}
        justify="space-around"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item md={6}>
          <img
            src={img}
            alt={userStory.title}
            className={classes.image}
          />
        </Grid>
        <Grid item md={6}
          className={classes.content}
        >
          <Typography className={classes.title}
            variant="h4" component="h2" gutterBottom>
            {userStory.title}
          </Typography>
          <CustomChip
            type={userStory.type}
          />
          <Typography variant="body1" gutterBottom>
            {userStory.message}
          </Typography>
          <Button
            variant="outlined"
            color={color === 'dark' ? 'primary' : 'secondary'}
            onClick={onAddStory}>
            Share your own story!
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Experience
