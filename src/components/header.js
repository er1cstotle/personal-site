import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'gatsby';
import { grey, yellow } from '@material-ui/core/colors';

import Avatar from 'components/avatar';

import { AppBar, Container, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  tabs: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1
    },
    paddingLeft: 16
  },
  tab: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minWidth: 80
  },
  tabsIndicator: {
    backgroundColor: yellow.A700
  },
  toolbar: {
    minHeight: 64,
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      minHeight: 48,
      justifyContent: 'flex-start'
    }
  },
  drawer: {
    minWidth: 250
  },
  menuButton: {
    display: 'flex'
  }
}));

function a11yProps(index) {
  return {
    id: `navigation-tab-${index}`,
    'aria-controls': `navigation-tabpanel-${index}`
  };
}

const ListItemLink = (props) => {
  return <ListItem button component={Link} {...props} />;
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
  const [drawerOpen, setDrawerOpen] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.path);
  });

  return (
    <AppBar position="static">
      <Container maxWidth={'lg'} disableGutters={true}>
        <Toolbar className={classes.toolbar}>
          <Avatar/>

          {/*  desktop views */}
          <Hidden implementation={'css'} className={classes.tabs} smDown>
            <Tabs classes={{ indicator: classes.tabsIndicator }} value={value} onChange={handleChange} aria-label="navigation">
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
          </Hidden>

          {/* mobile views */}
          <Hidden implementation={'css'} smUp>
            <IconButton edge="start" className={classes.menuButton} onClick={() => setDrawerOpen(true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer classes={{ paper: classes.drawer }} anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List>

                {pages.map(({ name, path, to }) => (
                  <ListItemLink key={name} onClick={() => setDrawerOpen(false)} to={to}>
                    <ListItemText primary={name} />
                  </ListItemLink>
                ))}


                <ListItem>
                  <IconButton edge="start" color="inherit" aria-label="twitter">
                    <Twitter />
                  </IconButton>
                  <IconButton edge="start" color="inherit" aria-label="github">
                    <GitHub />
                  </IconButton>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
