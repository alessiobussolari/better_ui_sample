import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // opzioni sass qui se necessarie
      }
    },
    postcss: {
      plugins: []
    }
  }
})