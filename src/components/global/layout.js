import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <Header {...props}/>

      {children}

      <footer>
          © {new Date().getFullYear()}, Built with
        {' '}
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
