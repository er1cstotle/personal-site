import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'gatsby';
import { grey, yellow } from '@material-ui/core/colors';

import Avatar from 'components/avatar';

import { AppBar, Container, Drawer, List, ListItem, ListItemText, Toolbar, IconButton, Tabs, Tab, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: grey[900]
  },
  tabs: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
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
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  socialIcon: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex'
    }
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
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects/' },
  { name: 'Dev Stuff', path: '/dev-stuff/' },
  { name: 'Reading', path: '/reading/' },
  { name: 'Listening', path: '/listening/' },
  { name: 'Essentials', path: '/essentials/' }
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
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth={'lg'} disableGutters={true}>
        <Toolbar className={classes.toolbar}>
          <Avatar/>
          {/*  desktop views */}
          <Tabs classes={{ root: classes.tabs, indicator: classes.tabsIndicator }} value={value} onChange={handleChange} aria-label="navigation">
            {pages.map(({ name, path }) => (
              <Tab key={name} component={Link} value={path} to={path} className={classes.tab} label={name} {...a11yProps(0)} />
            ))}
          </Tabs>

          <IconButton className={classes.socialIcon} edge="start" color="inherit" aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton className={classes.socialIcon} edge="start" color="inherit" aria-label="github">
            <GitHub />
          </IconButton>

          {/* mobile views */}
          <IconButton edge="start" className={classes.menuButton} onClick={() => setDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer classes={{ paper: classes.drawer }} anchor={'right'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <List>

              {pages.map(({ name, path }) => (
                <ListItemLink key={name} onClick={() => setDrawerOpen(false)} to={path}>
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

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
