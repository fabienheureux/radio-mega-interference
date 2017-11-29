module.exports = {
  siteMetadata: {
    title: `InterfÃÂ©rence - Radio Mega`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Barlow Condensed`]
      }
    }
  ],
}
