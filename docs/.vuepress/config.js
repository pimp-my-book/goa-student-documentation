module.exports = {
    base: '/',
    title: 'GOA Documentation',
    description: 'A documentation site to provide help for using GOA.',
    postcss: {
        plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    },
    theme:'local',
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
    }
}