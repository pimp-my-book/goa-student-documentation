module.exports = {
    title: 'GOA Documentation',
    description: 'A documentation site to provide help for using GOA.',
    postcss: {
        plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    }
}