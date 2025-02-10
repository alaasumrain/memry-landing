/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: {
      rules: {
        // Enable optimizations
        optimizePackageImports: ['@react-three/drei', '@react-three/fiber', 'three', 'framer-motion'],
      },
    },
    // Enable modern features
    serverActions: true,
    typedRoutes: true,
    serverComponentsExternalPackages: [],
  },
  images: {
    domains: ['memry.dev'],
  },
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable webpack optimization in production
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};

export default nextConfig;
