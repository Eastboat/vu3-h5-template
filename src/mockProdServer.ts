import type { Recordable } from 'vite-plugin-mock'
import { createProdMockServer } from 'vite-plugin-mock/client'

// 问题描述
// 1. `import.meta.globEager` 已被弃用, 需要升级vite版本,有兼容问题
// 2. `vite-plugin-mock` 插件问题 https://github.com/vbenjs/vite-plugin-mock/issues/56

// const modules: Record<string, any> = import.meta.glob("./**/*.ts", {
//   import: "default",
//   eager: true,
// });

// const mockModules = Object.keys(modules).reduce((pre, key) => {
//   if (!key.includes("/_")) {
//     pre.push(...modules[key]);
//   }
//   return pre;
// }, [] as any[]);

const modules = import.meta.glob('./**/*.ts', { eager: true })

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...(modules as Recordable)[key].default)
})
console.log('🚀 ~ file: mockProdServer.ts:29 ~ Object.keys ~ mockModules:', mockModules)

/**
 * Used in a production environment. Need to manually import all modules
 */

// import roleMock from '../mock/sys/define'
// import userMockFn from './mock/sys/user1'

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
