const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Eric Leong',
    description: 'Me, Myself and I',
    author: 'Eric Leong'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/avatar.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages')
      }
    }
    //
    // https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/29
    // this added an extra scroll bar to all packages
    // 'gatsby-plugin-transition-link'

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
