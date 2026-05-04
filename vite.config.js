import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

export default {
  //base: 'your domain',
  plugins: [
    vituum({
      vite: {
        build: {
          rollupOptions: {
            input: './src/pages/**/*.{twig,json,html}',
          },
          outDir: './dist'
        },
        root: 'src',
        css: {
          devSourcemap: true,
          cssPreprocessOptions: {
            scss: {
              includePaths: ['node_modules/']
            }
          }
        },
      },
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
  ]
}
