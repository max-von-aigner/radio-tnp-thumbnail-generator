/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    // This example targets avoiding bundling the 'canvas' package
    // for environments where it's not compatible or needed.
    if (!isServer) {
      // Prevent webpack from bundling 'canvas' on the client side
      config.externals.push({ canvas: "commonjs canvas" });
    }
    return config;
  },
};

export default nextConfig;

// PREVIOUS CONFIG:

//   /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
