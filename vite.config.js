import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

export default {

  plugins: [
    vituum({
      templates: {
        format: 'twig'
      }
    }),
    twig({
      namespaces: {
        components: 'src/components',
        layout: 'src/layouts',
        pages: 'src/pages'
      },
    })
  ],
  build: {
    rollupOptions: {
      input: ['./src/pages/**/*.{twig,json,html}'],
    },
    outDir: 'dist'
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: { 
      scss: {
        includePaths: ['node_modules/']
      }
    }
  }
}
