<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
const routes = useRoute()
const router = useRouter()
const allRoutes = ref(router.getRoutes())
console.log('🚀 ~ file: App.vue:6 ~ router:', router.getRoutes())
console.log('🚀 ~ file: App.vue:5 ~ routes:', routes)
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="text-[32px] w-full flex">
        <RouterLink v-for="item in allRoutes" :key="item.name" :to="item.path" class="block mr-4">{{
          item.name
        }}</RouterLink>
      </nav>
    </div>
  </header>

  <div class="w-screen h-screen bg-fuchsia">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>
