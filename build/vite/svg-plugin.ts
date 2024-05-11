/*
 * @Description: vben/vite-plugin-svg-icons 处理svg icon
 * @Author: eastboat
 * @Date: 2024-05-11 18:13:28
 * @LastEditors: eastboat
 * @LastEditTime: 2024-05-11 18:16:06
 */

// https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export const SvgIconPlugin = (root: string) => {
  return [
    // svg icon
    createSvgIconsPlugin({
      // 指定图标文件夹
      iconDirs: [path.resolve(root, 'src/icons/svg')],
      // 指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
}
