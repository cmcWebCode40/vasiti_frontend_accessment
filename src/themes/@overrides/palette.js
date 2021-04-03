import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const tetiaryColor = '#ee6211';
const borderColor = '#E6E7E9';
const greyColor = '#383838';
const inputColor = '#f4f7fc';
const light = '#f0f0f0';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  black,
  white,
  light,
  inputColor,
  greyColor,
  borderColor,
  tetiaryColor,
  primary: {
    main: '#FF5C00'
  },
  secondary: {
    main: '#FFCC2A'
  },
  tetiary: {
    main: tetiaryColor,
    contrastText: colors.orange[500],
    dark: colors.orange[900],
    light: colors.orange[300]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[800],
    light: colors.green[100]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[800],
    light: colors.blue[100]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: white,
    default2: 'f#4f7fc',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
