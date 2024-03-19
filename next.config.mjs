/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This condition checks if the configuration already has an `externals` property
      // and preserves it, alongside adding the new rule for `canvas`
      if (Array.isArray(config.externals)) {
        config.externals.push("commonjs canvas");
      } else if (typeof config.externals === "function") {
        const originalExternals = config.externals;
        config.externals = async (...args) => {
          const originalResult = await originalExternals(...args);
          return [...originalResult, "commonjs canvas"];
        };
      } else {
        // If there are no `externals` defined, it initializes it with the `canvas` configuration
        config.externals = ["commonjs canvas"];
      }
    }
    return config;
  },
};

export default nextConfig;
