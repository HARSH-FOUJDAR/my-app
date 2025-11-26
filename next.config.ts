/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.guvi.in",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },

  // ⚠ Fix for Netlify + Turbopack LightningCSS error
  experimental: {
    turbo: {
      loaders: {
        css: {
          lightningcss: false,
        },
      },
    },
  },
};

export default nextConfig;
