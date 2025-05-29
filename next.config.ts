import type {NextConfig} from 'next';

// ATENÇÃO: Substitua 'seu-repositorio' pelo nome real do seu repositório no GitHub.
// Se você estiver fazendo deploy em `username.github.io` (sem subdiretório),
// você pode definir REPO_NAME como uma string vazia ''.
const REPO_NAME = 'seu-repositorio';

const nextConfig: NextConfig = {
  output: 'export', // Habilita a exportação estática
  basePath: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Necessário para exportação estática no GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
