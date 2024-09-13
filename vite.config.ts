import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Добавляем path для работы с путями

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/Styles/styles.scss";`
      },
    },
  },
})
