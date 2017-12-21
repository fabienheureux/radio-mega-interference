module.exports = {
  pathPrefix: `/radio-mega-interference`,
  siteMetadata: {
    title: `Interférence - Radio Mega`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
		{
    	resolve: `gatsby-plugin-google-analytics`,
    	options: {
      	trackingId: `UA-25796890-2`,
    	},
  	},
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Barlow Condensed`]
      }
    }
  ],
}
