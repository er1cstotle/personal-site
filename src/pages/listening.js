import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Grow } from '@material-ui/core';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  root: {
    // can I create a theme value for 172 bases on the header, footer etc???
    height: 'calc(100vh - 172px)'
  }
}));

const ListeningPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grow in timeout={2000}>
            <iframe src="https://open.spotify.com/embed/playlist/6QD1KeDDPSNxEr6tPNvb0m" width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );

};

export default ListeningPage;
