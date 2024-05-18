/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images:{
        domains: ["cdn.iconfinder.com","C:","links.papareact.com", "img10.hotstar.com","images.pexels.com", "image.tmdb.org" ],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.iconfinder.com"',
              pathname: '**',
            },
        ],
    },
    experimental: {
        appDir: true,
    }
}



