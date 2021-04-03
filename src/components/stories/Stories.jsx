import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { CustomChip } from '..';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 'auto'),
  },
  content: {
    maxWidth: 400,
    margin: theme.spacing(1, 'auto'),
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  img: {
    borderRadius: '50%',
    height: 200,
    width: 200
  }
}));

const Stories = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        className={classes.root}
      >
        {data.map(item => (
          <Grid
            item
            md={4}
            className={classes.content}>
            <img
              className={classes.img}
              src={item.imgSrc}
              alt={item.firstName} />
            <Typography variant="h5" component="h4">
              {item.firstName} {item.lastName}
            </Typography>
            <div>
              <Typography variant="subtitle1">
                {item.location}
              </Typography>
              <CustomChip
                type={item.type}
                title={item.type}
              />
            </div>
            <Typography variant="body1" >
              {item.story}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stories
