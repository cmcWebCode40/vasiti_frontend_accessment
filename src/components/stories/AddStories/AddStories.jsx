import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Close as CloseIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Modal from '../../Modal';
import Notifications from '../../Notifications/Notifications'
import congrats from '../../../assets/images/congratsIcon.svg'
import AttachmentIcon from '@material-ui/icons/Attachment';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import useStories from './hooks/useStories';
import { MenuItem, Select } from '@material-ui/core';
import locations from '../../../utils/locations'
import { Alert } from '@material-ui/lab';


const notifyMessage = {
  title: `Thank you for
  sharing your story!`,
  message: `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do 
  eiusmod tempor incididunt ut labore et dolore magna aliqua.
  `,
  imgSrc: congrats
}

const useStyles = makeStyles((theme) => ({
  button: {
    float: 'right',
    margin: theme.spacing(2, 1),
  }

}));


const AddStories = ({ open, setOpen }) => {
  const classes = useStyles();
  const {
    cloudImageUpload,
    handleChange,
    setIsSuccess, message,
    isSuccess, isLoading,
    image, uploadImage,
    values, removeImage
  } = useStories();

  const onClose = () => {
    setIsSuccess(false);
    setOpen(false)
  }
  return (
    <>
      <Modal
        open={open}
        title="Share your amazing story!"
        setOpen={setOpen}
        noHeader={isSuccess}
      >
        <div>
          {isSuccess ?
            <Notifications
              onClose={onClose}
              {...notifyMessage}
            /> :
            <form onSubmit={cloudImageUpload}>

              {message && <Alert severity="error">
                {message}
              </Alert>}
              <Grid container spacing={4}>
                <Grid item md={12} xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={'file'}
                      onChange={uploadImage}
                      required
                      value={image?.file}
                      color="secondary"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                          >
                            {image ?
                              <CloseIcon /> :
                              <AttachmentIcon onClick={removeImage} />
                            }
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="First Name"
                    fullWidth
                    required
                    value={values.firstName}
                    name="firstName"
                    onChange={handleChange}
                    color="secondary"
                    id="id-first-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    required
                    value={values.lastName}
                    name="lastName"
                    color="secondary"
                    id="id-last-name"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    multiline
                    rows={5}
                    label="Share your story"
                    fullWidth
                    required
                    value={values.story}
                    name="story"
                    color="secondary"
                    id="id-story"
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <Grid
                    container
                  >
                    <Grid item>
                      <Typography>
                        What did you interact with Vasiti as?
                </Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup row aria-label="position"
                        name="type" defaultValue='customer'
                        onChange={handleChange}
                      >
                        <FormControlLabel value="customer"
                          control={<Radio required color="primary" />}
                          label="Customer"
                        />
                        <FormControlLabel value="vendor"
                          control={<Radio required color="primary" />}
                          label="Vendor"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} xs={12}>
                  <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleChange}
                      label="Age"
                      name="location"
                      defaultValue=""
                      fullWidth
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {locations.map((list) => (
                        <MenuItem key={list.state.id} value={list.state.name}>
                          {list.state.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                size="large"
                variant="contained"
                color="primary"
                disabled={isLoading}
                type="submit"
                className={classes.button}
              >
                Share your Story
          </Button>
            </form>
          }
        </div>
      </Modal>
    </>
  )
}

export default AddStories;
