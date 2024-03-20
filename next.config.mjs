/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.externals.push({
      canvas: "commonjs canvas",
    });
    // Make sure to return the modified config from within the webpack function
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["canvas"],
  },
};

export default nextConfig;
