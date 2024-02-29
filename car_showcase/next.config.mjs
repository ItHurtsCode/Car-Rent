/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains:[
        "cdn.imagin.studio"
      ],
        loader: 'imgix',
        path: '/',
      },
      experimental: {
        appDir: true,
      },
};


export default nextConfig

