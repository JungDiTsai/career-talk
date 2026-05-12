import { defineConfig } from '@slidev/cli'

export default defineConfig({
  base: '/career-talk/',
  exportFilename: 'career-talk-slides',
  vite: {
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
})
