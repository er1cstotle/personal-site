import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Container, Grid, Paper } from '@material-ui/core';
import { Link } from 'gatsby';


import Image from 'components/image';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 48,
    [theme.breakpoints.up('sm')]: {
      minHeight: 64
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={'md'}>
      <SEO title="Eric Leong" />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>

    </Container>
  );

};

export default IndexPage;
