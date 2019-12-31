module.exports = {
  siteMetadata: {
    title: `learned - Kat Huang`,
    url: `https://katmh.com/learned`,
    description: `chronicling something I've learned each day`
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          'https://v2-api.sheety.co/7611a13fe98f561499b324b3517c5ac3/til/sheet1'
        ]
      }
    }
  ]
}
