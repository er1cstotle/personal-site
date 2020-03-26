import React from 'react';
import Gist from 'react-gist';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const DevStuffPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container spacing={3}>


        <Grid item xs={12} sm={8}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>
            <Gist id='47ab2068d2d0839d981080267c3fdbfb' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>

      </Grid>
    </Container>
  );

};

export default DevStuffPage;
