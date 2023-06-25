import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // 프로젝트의 절대경로를 설정해주기 위한 resolve 코드
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
  // HMR 설정을 위한 추가 Config
  server: {
    watch: {
      usePolling: true,
    },
  },
});
