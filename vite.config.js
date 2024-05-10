
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";
import { machine } from "os";

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
         ai: resolve(__dirname, "src/pages/ai.html"),
         datascience: resolve(__dirname, "src/pages/datascience.html"),
         machinelearning: resolve(__dirname, "src/pages/machinelearning.html"),
         cybersecurity: resolve(__dirname, "src/pages/cybersecurity.html"),
         blockchain: resolve(__dirname, "src/pages/blockchain.html"),
         flutter: resolve(__dirname, "src/pages/flutter.html"),
         gamedev: resolve(__dirname, "src/pages/gamedev.html"),
         projectmanagement: resolve(__dirname, "src/pages/projectmanagement.html"),
         uxdesign: resolve(__dirname, "src/pages/uxdesign.html"),
        softwareArchitect: resolve(__dirname, "src/pages/software-architect.html"),
        react: resolve(__dirname, "src/pages/react.html"),
        computerScience: resolve(__dirname, "src/pages/computer-science.html"),
        python: resolve(__dirname, "src/pages/python.html"),
        java: resolve(__dirname, "src/pages/java.html"),
        javascript: resolve(__dirname, "src/pages/javascript.html"),
        angular: resolve(__dirname, "src/pages/angular.html"),
        node: resolve(__dirname, "src/pages/node.html"),

      }
    } 
  }
}