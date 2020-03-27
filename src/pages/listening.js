import React from 'react';

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

const ListeningPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <iframe src="https://open.spotify.com/embed/playlist/6QD1KeDDPSNxEr6tPNvb0m" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );

};

export default ListeningPage;
