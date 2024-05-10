/*
 * @Description: 自动/按需导入
 * @Author: eastboat
 * @Date: 2024-05-09 11:28:34
 * @LastEditors: eastboat
 * @LastEditTime: 2024-05-09 15:51:10
 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export const autoImportPlugin = () => {
  return [
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'], // 组件的有效文件扩展名
      resolvers: [VantResolver()], // 自定义组件的解析器
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts' // 生成 `components.d.ts` 全局声明，
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
        'vue', // 表示将 Vue 中的常用 API（如 ref、reactive 等）自动导入。
        'pinia',
        // 'vitest',
        // '@vueuse/core',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'] // 从 vue-router/auto 中自动导入 useLink 函数。
          // '@/utils/i18n': ['i18n', 'locale'],
          // 'vue-i18n': ['useI18n']
        }
        // unheadVueComposablesImports
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables'] // 指定在 src/composables 文件夹中自动导入可复用的组合式 API。
    })
  ]
}
