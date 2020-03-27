import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, ...props }) => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <CssBaseline />
      <Header {...props}/>
      {children}
      <Footer {...props}/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
