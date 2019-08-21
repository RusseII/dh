module.exports = {
  siteMetadata: {
    title: `DeepHire - Simple Video Interviews`,
    description: `DeepHire is the simplest way to present your candidates with video.`,
    author: `russell@deephire.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '75eeec48-f14c-4ebf-aa7b-c70b538b63f4',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '350091625799103',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-103192788-1yar',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'landing.deephire.com',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://deephire.us20.list-manage.com/subscribe/post?u=ae19c1a100379706c99088841&amp;id=37df4bef82', // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/deephire.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`, `800`],
          },
          {
            family: `Raleway`,
            variants: [`500`, `600`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
