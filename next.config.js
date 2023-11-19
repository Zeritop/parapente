/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
        {
            source: '/instagram',
            destination: 'https://www.instagram.com/parapentecordillera.cl/',
            permanent: false,
            basePath: false
        },
        {
            source: '/whatsapp',
            destination: 'https://wa.me/56975215777 ',
            permanent: false,
            basePath: false
        },
        {
            source: '/facebook',
            destination: 'https://www.facebook.com/profile.php?id=100094284862217',
            permanent: false,
            basePath: false
        },
        {
            source: '/tiktok',
            destination: 'https://www.tiktok.com/@parapentecordillera?_t=8hOhOCD9IsX&_r=1',
            permanent: false,
            basePath: false
        }
    ]
  }
}

module.exports = nextConfig
