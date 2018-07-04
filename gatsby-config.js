module.exports = {
  siteMetadata: {
    title: 'P-More',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto Condensed\:300,400,700',
        ]
      }
    }
  ],
}
