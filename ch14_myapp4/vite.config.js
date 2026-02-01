import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @를 src로 매핑
    },
  },
  define: {
    'global': 'window',  // global을 window로 매핑
  },
});