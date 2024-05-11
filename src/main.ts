// normalize.css
// import 'normalize.css/normalize.css'
import '@unocss/reset/normalize.css'

import './assets/main.css'

//  unocss
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// production mock server
console.log('🚀 ~ file: main.ts:23 ~ process.env.NODE_ENV:', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  import('./mockProdServer').then(({ setupProdMockServer }) => {
    setupProdMockServer()
  })
}

app.mount('#app')
