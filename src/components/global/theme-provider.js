import React from 'react';

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, grey, yellow } from '@material-ui/core/colors';

// [breakpoints.up('md')]: {
//   minWidth: '200px',
//   backgroundColor: 'yellow',
// },
const breakpoints = createBreakpoints({});

console.log(breakpoints.up('md'));


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A700
    },
    secondary: {
      main: yellow.A700
    }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: grey[900]
      }
    },
    MuiContainer: {
      root: {
        paddingTop: 84,
        [breakpoints.up('md')]: {
          paddingTop: 108
        }
      }
    }
  },
  props: {
  }
});

const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;

};

export default MyThemeProvider;