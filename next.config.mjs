/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    exports: {
      target: "node",
      node: {
        __dirname: false,
      },
      module: {
        rules: [
          {
            test: /\.node$/,
            loader: "node-loader",
          },
        ],
      },
    },
  },
};

export default nextConfig;
