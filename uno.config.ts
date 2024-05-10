// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetMini } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    // 此预设尝试提供流行的工具优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等。
    presetUno(), // https://unocss.nodejs.cn/presets/uno
    // 属性化模式预设：通过在元素的属性中使用类名的方式来应用样式，提供一种更语义化的开发体验
    presetAttributify(), // https://unocss.nodejs.cn/presets/attributify
    // https://unocss.nodejs.cn/presets/icons
    presetIcons({
      collections: {
        antDesign: () => import('@iconify-json/ant-design').then((i) => i.icons as any)
      }
    }),
    presetRemToPx({
      baseFontSize: 16
    }),
    // 该预设包含更多实用的 CSS 工具，但功能更简单以保持其小巧的尺寸。它可以用作高级布局需求的替代方案。
    presetMini() // https://unocss.nodejs.cn/presets/mini
    // ...other presets
  ],
  shortcuts: [
    // shortcuts to multiple utilities
    // 一个用于按钮的快捷方式，将多种样式组合在一起。使用 btn 类时，会自动应用以下样式
    [
      'btn',
      'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ],
    [
      'btn1',
      'px-6 py-3 rounded-3 border-none inline-block bg-green-200 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ]
  ],
  rules: [
    // 动态规则：匹配 "font-icon-数字"
    [/^font-icon-(\d+)$/, ([, size]) => ({ 'font-size': `${size}px` })]
  ]
})
