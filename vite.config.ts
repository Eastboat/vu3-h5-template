import { fileURLToPath, URL } from 'node:url'
import path from 'path'
function resolve(dir: string) {
  return path.join(__dirname, dir)
}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

import VueRouter from 'unplugin-vue-router/vite' // 自动配置生成路由

import { stylePlugin, autoImportPlugin } from './build/vite'

import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages', // 指定路由文件夹路径
      dts: 'src/typed-router.d.ts'
    }),
    vue(),
    vueJsx(),
    VueDevTools(),

    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // vite plugins
    autoImportPlugin(),
    stylePlugin()
    // routerPlugin()
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
