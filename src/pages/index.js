import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grow, Grid, Paper, Typography } from '@material-ui/core';

import Yoga from 'components/images/yoga';
import Bbt from 'components/images/bbt';
import Books from 'components/images/book';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center'
  },
  image: {
    borderRadius: '100%',
    overflow: 'hidden'
  }
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Eric Leong" />

      <Grid>
        <Grid item xs={12}>
          <Grow in timeout={700}>
            <Paper className={classes.header}>
              <Typography variant={'h1'} color={'textPrimary'}>Eric Leong</Typography>
              <Typography variant={'h4'} color={'textPrimary'}>So Called "Web Developer"</Typography>
              <Typography variant={'body1'} color={'textPrimary'}>Lorem ipsum</Typography>
            </Paper>
          </Grow>
        </Grid>
      </Grid>


      <Grid container alignItems={'flex-end'} justify={'center'} spacing={5}>

        <Grid item xs={2}>
          <Grow in timeout={700}>
            <Paper className={classes.image}>
              <Bbt/>
            </Paper>
          </Grow>
        </Grid>
        <Grid item xs={2}>
          <Grow in timeout={700}>
            <Paper className={classes.image}>
              <Yoga/>
            </Paper>
          </Grow>
        </Grid>
        <Grid item xs={2}>
          <Grow in timeout={700}>
            <Paper className={classes.image}>
              <Books/>
            </Paper>
          </Grow>
        </Grid>
      </Grid>


    </Container>
  );

};

export default IndexPage;
