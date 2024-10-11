<template>
  <div>
    <h1>login页面：这里测试mock插件数据</h1>
    <p class="text-30">{{ responseText }}</p>
    <br />
    <p class="text-30">{{ responseText2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { createUser, userLogin } from '@/api/mocks/user'
const responseText = ref<any>(null)
const responseText2 = ref<any>(null)

onMounted(async () => {
  try {
    const res = await createUser()
    const res2 = await userLogin({ username: 'vben', password: '123456' })
    console.log('🚀 ~ file: Login.vue:14 ~ onMounted ~ res:', res, res2)
    responseText.value = res
    responseText2.value = res2
  } catch (error) {
    console.log('🚀 ~ file: Login.vue:15 ~ onMounted ~ error:', error)
  }
})
</script>

<style scoped></style>
