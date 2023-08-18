/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);
   
module.exports = withNextIntl(nextConfig);