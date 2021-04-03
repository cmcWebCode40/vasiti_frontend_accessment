import { createMuiTheme } from '@material-ui/core';
import { palette, typography } from './@overrides/';


const theme = createMuiTheme({
  palette,
  typography
});

export default theme;