import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Link } from 'gatsby';

import { Container, Hidden, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: grey[900]

  }
}));


const Footer = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography>

        hi
      </Typography>

    </Paper>
  );
};

export default Footer;
