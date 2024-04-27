import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
 
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microFE2",
      remotes: {
        Header_Footer:"http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  
})
