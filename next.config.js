/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER === phase) {
    return {
      env: {
        mongodb_username: "nextjs",
        mongodb_password: "course",
        mongodb_clustername: "nextjs-cluster",
        mongodb_database: "env",
      },
    };
  }
  return {
    env: {
      mongodb_username: "nextjs",
      mongodb_password: "course",
      mongodb_clustername: "nextjs-cluster",
      mongodb_database: "prod",
    },
  };
};

module.exports = nextConfig;
