import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import Image from 'components/image';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Eric Leong" />

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Image/>
        </Grid>
        <Grid item xs={9}>
          <Paper variant={'outlined'} square elevation={0} className={classes.paper}>
            <Typography variant={'h1'} align={'left'} color={'textPrimary'}>Eric Leong</Typography>
            <Typography variant={'h4'} align={'left'} color={'textPrimary'}>I am a software developer</Typography>
            <Typography variant={'body1'} align={'left'} color={'textPrimary'}>Lorem ipsum</Typography>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );

};

export default IndexPage;
