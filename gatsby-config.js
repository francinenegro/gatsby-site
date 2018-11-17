module.exports = {
  siteMetadata: {
    title: 'Francesca Negro',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicomyLogo-01.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'agjl59xvy97w',
        accessToken: '534fc346a30aab5f7a5ee62aed3aa3a1395ceb69928c0d3843efe17bb8e52cb0'
      }
    },
    
     {
            resolve: `gatsby-plugin-typography`,
            options: {
              pathToConfigModule: `src/utils/typography`,
            },
          },
  ],
}
