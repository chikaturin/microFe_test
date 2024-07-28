import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remote: "remote@https://htilssu.com/assets/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^18.2.0",
        },
        "@mantine/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^7.11.2",
        },
        "@mantine/form": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^7.11.2",
        },
        "@mantine/hooks": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^7.11.2",
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    include: ["@mantine/core", "@mantine/hooks", "@mantine/form"],
  },
});
