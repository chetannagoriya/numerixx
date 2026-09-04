import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep dependency tracing inside this project. Without this, Next.js may
  // select a lockfile from a parent directory and produce an invalid Vercel
  // build (or fail while traversing files outside the repository).
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
