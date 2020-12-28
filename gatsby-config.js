module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-158678369-1",
                head: true,
                anonymize: true,
            },
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 900,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
              component: require.resolve(`./src/components/Layout/Layout.js`),
            },
        },
    ]
}