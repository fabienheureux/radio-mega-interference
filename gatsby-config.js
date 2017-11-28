module.exports = {
  siteMetadata: {
    title: `Interférence - Radio Mega`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`]
      }
    }
  ],
}
