import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'Sidhu-Photography';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isGithubPages ? `/${repoName}` : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
