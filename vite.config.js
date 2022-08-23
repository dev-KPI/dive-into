import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "./src");
const outDir = resolve(__dirname, "public");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "project-blocks/page/about-us/", "about-us.html"),
        members: resolve(root, "project-blocks/page/members/members.html"),
        projects: resolve(root, "project-blocks/page/projects/projects.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "fonts";
          } else if (/css/.test(extType)) {
            extType = "css";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
