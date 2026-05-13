import { defineConfig } from '@slidev/cli'

export default defineConfig({
  base: '/career-talk/',
  routerMode: 'hash',
  exportFilename: 'career-talk-slides',
  vite: {
    base: '/career-talk/',
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
})
