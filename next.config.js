const withNextIntl = require('next-intl/plugin')('./src/i18n')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig);