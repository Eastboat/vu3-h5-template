/*
 * @Description: 处理路由相关的插件
 * @Author: eastboat
 * @Date: 2024-05-09 11:39:13
 * @LastEditors: eastboat
 * @LastEditTime: 2024-10-11 10:05:17
 */

import VueRouter from 'unplugin-vue-router/vite' // 自动配置生成路由

export const routerPlugin = () => {
  return VueRouter({
    extensions: ['.vue'],
    routesFolder: 'src/views', // 指定路由文件夹路径
    dts: 'src/typed-router.d.ts'
  })
}
