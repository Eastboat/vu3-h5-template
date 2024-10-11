import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { stylePlugin, autoImportPlugin, SvgIconPlugin } from './build/vite'
// import { routerPlugin } from './build/vite'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe } from 'vite-plugin-mock'

const resolve = (dir: string) => {
  return path.join(__dirname, dir)
}

/**
 * UnoCSS 配置文件
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // 根据项目配置。可以配置在.env文件
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const localEnabled: any = (command === 'serve' && env.VITE_USE_MOCK) || true
  const prodEnabled: any = env.VITE_USE_MOCK || false
  console.log('🚀 ~ file: vite.config.ts:34 ~ defineConfig ~ mode:', command, mode, env)
  return {
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
      stylePlugin(),
      SvgIconPlugin(root),
      // https://github.com/vbenjs/vite-plugin-mock/blob/v2.9.1/README.zh_CN.md
      viteMockServe({
        mockPath: 'mock',
        // enable: localEnabled, // 是否启用 mock 功能
        supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        watchFiles: true, // 将监视mockPath文件夹中的文件更改。 并实时同步到请求结果
        localEnabled: localEnabled, // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        prodEnabled: prodEnabled, // 设置是否在生产环境启用 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        logger: true, // 是否在控制台显示请求日志
        // 自动读取模拟.ts 文件时，请忽略指定格式的文件， injectCode代码注入的文件,默认为项目根目录下src/main.{ts,js}
        injectCode: `
          import { setupProdMockServer } from './src/mockProdServer';
          setupProdMockServer();  
        `
      } as any)
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/styles/_animations.scss";
            @import "./src/styles/_variables.scss";
            @import "./src/styles/_mixins.scss";
            @import "./src/styles/_helpers.scss";
          `
        }
        // postcss: {
        //   plugins: [
        //     mobile({
        //       appSelector: '#app',
        //       viewportWidth: 375,
        //       maxDisplayWidth: 580,
        //       rootContainingBlockSelectorList: ['van-tabbar', 'van-popup']
        //     })
        //   ]
      }
    }
    // server: {
    //   host: true,
    //   port: 5173,
    //   proxy: {
    //     '/api': {
    //       target: '',
    //       ws: false,
    //       changeOrigin: true
    //     }
    //   }
    // }
  }
})
