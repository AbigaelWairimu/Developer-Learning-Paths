
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
         main: resolve(__dirname, "index.html"),
         backend: resolve(__dirname, "src/pages/backend.html"),
         frotend: resolve(__dirname, "src/pages/frontend.html"),
         communities: resolve(__dirname, "src/pages/communities.html"),
         contact: resolve(__dirname, "src/pages/contact.html"),
         guides: resolve(__dirname, "src/pages/guides.html"),
         videos: resolve(__dirname, "src/pages/videos.html"),
         devops: resolve(__dirname, "src/pages/devops.html"),
         404: resolve(__dirname, "src/pages/404.html"),
      }
    } 
  }
}