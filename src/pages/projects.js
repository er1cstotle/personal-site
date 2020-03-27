
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

const ProjectsPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container justify={'space-evenly'} spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} className={classes.paper}>Hi</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} className={classes.paper}>Hi</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper variant={'outlined'} className={classes.paper}>Hi</Paper>
        </Grid>

      </Grid>

    </Container>
  );

};

export default ProjectsPage;
