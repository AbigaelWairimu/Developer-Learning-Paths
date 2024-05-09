export default {
    build: {
      rollupOptions: {
        input: {
          frontend: 'src/pages/frontend.html',
          backend: 'src/pages/backend.html',
          communities: 'src/pages/communities.html',
          contact: 'src/pages/contact.html',
          guides: 'src/pages/guides.html',
          videos: 'src/pages/videos.html'
        }
      }
    }
  }