import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'gatsby';

import Avatar from 'components/images/avatar';
import { AppBar, Container, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  tabs: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1
    },
    paddingLeft: 16
  },
  tab: {
    minWidth: 80
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      minHeight: 48,
      paddingLeft: 84,
      paddingRight: 84,
      justifyContent: 'flex-start'
    }
  },
  drawer: {
    minWidth: 250
  }
}));

const a11yProps = (index) => {
  return {
    id: `navigation-tab-${index}`,
    'aria-controls': `navigation-tabpanel-${index}`
  };
};

const pages = [
  { name: 'Home', to: '/', path: '/' },
  { name: 'Projects', to: '/projects', path: '/projects/' },
  { name: 'Dev Stuff', to: '/dev-stuff', path: '/dev-stuff/' },
  { name: 'Reading', to: '/reading', path: '/reading/' },
  { name: 'Listening', to: '/listening', path: '/listening/' },
  { name: 'Essentials', to: '/essentials', path: '/essentials/' }
];

const Header = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState('/');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.path);
  });

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Avatar/>

        {/*  desktop views */}
        <Hidden implementation={'css'} className={classes.tabs} smDown>
          <Tabs value={value} onChange={handleChange} aria-label="navigation">
            {pages.map(({ name, path, to }) => (
              <Tab key={name} component={Link} value={path} to={to} className={classes.tab} label={name} {...a11yProps(0)} />
            ))}
          </Tabs>
        </Hidden>

        <Hidden implementation={'css'} smDown>
          <IconButton edge="start" color="inherit" aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="github">
            <GitHub />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="linkedin">
            <LinkedIn />
          </IconButton>
        </Hidden>

        {/* mobile views */}
        <Hidden implementation={'css'} mdUp>
          <IconButton edge="start" onClick={() => setDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon fontSize={'large'} />
          </IconButton>

          <Drawer classes={{ paper: classes.drawer }} anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <List>
              {pages.map(({ name, path, to }) => (
                <ListItem key={name} button component={Link} onClick={() => setDrawerOpen(false)} to={to}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}

              <ListItem>
                <IconButton edge="start" color="inherit" aria-label="twitter">
                  <Twitter />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="github">
                  <GitHub />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="linkedin">
                  <LinkedIn />
                </IconButton>
              </ListItem>
            </List>
          </Drawer>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
