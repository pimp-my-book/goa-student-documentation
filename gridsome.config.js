// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//pakage.json
module.exports = {
  siteName: 'GOA Student Docs',
  siteDescription: 'A documentation site for GOA.',
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
      route: '/docs/:slug/',
      typeName: 'Article'
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
  ,

  transformers: {
    remark:{
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener','noreferrer'],
      
    }
  }
}
