import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  outputFileTracingRoot: path.join(__dirname),

  // 🛠️ Bỏ qua lỗi TypeScript khi build trên Vercel
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🛠️ Bỏ qua lỗi ESLint khi build trên Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🔥 Găm cứng các biến môi trường để bất kỳ link Vercel nào cũng nhận đúng cấu hình
  // Backend giờ chạy trên VM 110, lộ ra qua Cloudflare Tunnel (không còn EC2/AWS).
  env: {
    NEXT_PUBLIC_API_BASE_URL: 'https://api-ott.vietbe.online',
    NEXT_PUBLIC_SOCKET_URL: 'https://api-ott.vietbe.online',
    NEXT_PUBLIC_CALL_API_BASE_URL: 'https://api-ott.vietbe.online',
    NEXT_PUBLIC_AGORA_APP_ID: '4f8811e73c144ffb8e2d2a613fb0010f',
  }
};

export default nextConfig;
