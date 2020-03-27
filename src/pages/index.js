import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grow, Grid, Paper, Typography } from '@material-ui/core';

import Bbt from 'components/bbt';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center'
  }
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Eric Leong" />

      <Grid container spacing={3}>

        <Grid item xs={12} >
          <Grow in timeout={700}>
            <Paper variant={'outlined'} className={classes.paper}>

              <div style={{ width: 200, display: 'inline-block' }}>
                <Bbt/>
              </div>

              <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
                <Typography variant={'h1'} align={'left'} color={'textPrimary'}>Eric Leong</Typography>
                <Typography variant={'h4'} align={'left'} color={'textPrimary'}>I am a software developer</Typography>
                <Typography variant={'body1'} align={'left'} color={'textPrimary'}>Lorem ipsum</Typography>
              </div>

            </Paper>
          </Grow>
        </Grid>
      </Grid>

    </Container>
  );

};

export default IndexPage;
