module.exports = {
    base: '/',
    title: 'GOA Documentation',
    description: 'A documentation site to provide help for using GOA.',
    postcss: {
        plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    },
   theme: '@vuepress/theme/Layout.vue',
    themeConfig: {
        logo: 'GOA',
        search:true,
        nav: [
            {text: 'Home', link: '/'}
        ],
        sidebar:[
            '/',
            '/sign-up'
        ]
    },
    chainWebpack(config){
        config.externals([/^(vue|vue-router)$/])
    }
}