module.exports = {

  siteMetadata: {
      title: `주니어 개발자의 개발 블로그`,
      description: `주니어 개발자로서의 저를 표현한 블로그입니다.`,
      author: `Hyun`,
      siteUrl: 'https://j3llyBe4n.github.io/',
  },

  plugins: [
    
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },

    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://j3llyBe4n.github.io/',
        stripQueryString: true,
      },
    },

    `gatsby-plugin-emotion`,
    
    `gatsby-plugin-react-helmet`,

    'gatsby-plugin-sitemap',
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        }
      }
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
  ],
};