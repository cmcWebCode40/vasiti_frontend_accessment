import React from 'react';
import Box from '@material-ui/core/Box';
import { Button, makeStyles, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    '& >*': {
      margin: theme.spacing(1, .4),
    },
    '&nth-child(3)': {
      margin: theme.spacing(0, 2, 0, 0),
    }
  },
  button: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
}));

const Notifications = ({
  imgSrc,
  title,
  message,
  onClose
}) => {
  const classes = useStyles();

  return (
    <Box display="flex"
      flexDirection="column"
      justifyContent="center"
      className={classes.root}
      alignItems="center">
      <img src={imgSrc} alt={title} />
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary">
        {message}
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={onClose}
        type="submit"
      >
        CLose
      </Button>
    </Box>
  )
}

export default Notifications
