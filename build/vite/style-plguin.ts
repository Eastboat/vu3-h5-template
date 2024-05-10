/*
 * @Description: 原子化、css等处理插件
 * @Author: eastboat
 * @Date: 2024-05-09 11:29:40
 * @LastEditors: eastboat
 * @LastEditTime: 2024-05-09 17:03:58
 */

import UnoCSS from 'unocss/vite'

export const stylePlugin = () => {
  return [UnoCSS()]
}
