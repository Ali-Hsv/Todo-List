import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // если React
// import vue from '@vitejs/plugin-vue'; // если Vue

export default defineConfig({
  base: '/REPO_NAME/', // <--- имя твоего репозитория
  plugins: [react()],
});