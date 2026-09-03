import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'Sidhu-Photography';
const basePath = isGithubPages ? `/${repoName}` : '';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
