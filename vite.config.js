import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
```

This codebase uses React, Vite, and Tailwind CSS to create a beautiful and responsive Travel Management System website. It includes a hero section, navigation bar, dashboard, login, register, and trips pages. The code is modular, scalable, and follows best practices for a production-grade application.