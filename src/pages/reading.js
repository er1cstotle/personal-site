import React from 'react';
import { graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Container, Divider, Grid, List, ListItem, ListItemText, ListItemAvatar, Paper, Typography } from '@material-ui/core';
import SEO from 'components/seo';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const ReadingPage = ({ data: { books, articles } }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'}>
      <SEO title="Home" />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant={'h3'} color={'textPrimary'}>Books</Typography>
          <List className={classes.root}>
            {books.nodes.map(({ id }) => (
              <React.Fragment key={id}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                Ali Connors
                        </Typography>
                        {' — I\'ll be in your neighborhood doing errands this…'}
                      </>
                    }
                  />
                  <Button variant="contained" color={'primary'}>Test</Button>
                </ListItem>
                <Divider component="li" />

              </React.Fragment>
            ))}
          </List>
        </Grid>

        <Grid item xs={12}>


          <Typography variant={'h3'} color={'textPrimary'}>Articles</Typography>
          <List className={classes.root}>
            {articles.nodes.map(({ id }) => (
              <React.Fragment key={id}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                Ali Connors
                        </Typography>
                        {' — I\'ll be in your neighborhood doing errands this…'}
                      </>
                    }
                  />
                  <Button variant="contained" color={'primary'}>Test</Button>
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Grid>


      </Grid>
    </Container>
  );

};

export const data = graphql`
    query {
      books: allBooksJson {
        nodes {
          id
        }
      }
      articles: allArticlesJson {
        nodes {
          id
        }
      }
    }
  `;

export default ReadingPage;
