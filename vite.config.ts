import { fileURLToPath, URL } from 'node:url'
import path from 'path'
function resolve(dir: string) {
  return path.join(__dirname, dir)
}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

import { stylePlugin, autoImportPlugin } from './build/vite'
// import { routerPlugin } from './build/vite'

import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // routerPlugin(),
    vue(),
    vueJsx(),
    VueDevTools(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }), // 为旧浏览器添加 Polyfill
    // vite plugins
    autoImportPlugin(),
    stylePlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@common': resolve('./src/common'),
      '@components': resolve('./src/components'),
      '@store': resolve('./src/store'),
      '@pages': resolve('./src/pages')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
  // css: {
  // postcss: {
  //   plugins: [
  //     mobile({
  //       appSelector: '#app',
  //       viewportWidth: 375,
  //       maxDisplayWidth: 580,
  //       rootContainingBlockSelectorList: ['van-tabbar', 'van-popup']
  //     })
  //   ]
  // }
  // }
})
