// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//pakage.json
module.exports = {
  siteName: 'GOA Student Docs',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.js'
      },
      
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
      route: '/docs/:slug',
      typeName: 'Article'
      }
    }
  ],
  transformers: {
    remark:{
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener','noreferrer'],
      
    }
  }
}
