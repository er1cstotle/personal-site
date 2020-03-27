import React from 'react';
import Layout from 'components/layout';
import ThemeProvider from 'components/layout/theme-provider';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

