import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: grey[900]
      }
    }
  },
  palette: {
    primary: {
      main: blue.A700
    }
  }
});

const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;

};

export default MyThemeProvider;