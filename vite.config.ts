import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:  "@import './src/app/assets/styles/abstracts/mixins.scss'; @import './src/app/assets/styles/abstracts/vars.scss';"  // Путь к вашему файлу с миксинами
      }
    }
  }
});
