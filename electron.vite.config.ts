import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@atoms': resolve('src/renderer/src/components/atoms'),
        '@molecules': resolve('src/renderer/src/components/molecules'),
        '@organisms': resolve('src/renderer/src/components/organisms'),
        '@templates': resolve('src/renderer/src/components/templates'),
        '@pages': resolve('src/renderer/src/components/pages'),
        '@assets': resolve('src/renderer/src/assets'),
        '@utils': resolve('src/utils'),
        '@globalTypes': resolve('src/globalTypes'),
        '@enums': resolve('src/enums')
      }
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'formatjs',
              {
                idInterpolationPattern: '[sha512:contenthash:base64:6]',
                ast: true
              }
            ]
          ]
        }
      }),
      eslint(),
      svgr()
    ]
  }
})
