<template>
  <div>
    <h1>login</h1>
    <p>{{ responseText }}</p>
    <br />
    <p>{{ responseText2 }}</p>
    <div class="bg-white w-100px">
      <SvgIcon name="check-in"></SvgIcon>
      <SvgIcon name="dark"></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createUser, userLogin } from '@/api/mocks/user'
import SvgIcon from '@/components/SvgIcon/index.vue'
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
