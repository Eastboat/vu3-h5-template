<template>
  <div id="app" class="text-center mt-10">
    <Calendar :start-date="startDate" :switch-unit="switchUnit" @update-date="updateDate" />
    <div class="mt-4">
      <label class="mr-4"> <input type="radio" value="day" v-model="switchUnit" /> 按天切换 </label>
      <label> <input type="radio" value="week" v-model="switchUnit" /> 按周切换 </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import Calendar from '@/components/Calendar/Calendar.vue' // 切换基础版
// import Calendar from '@/components/Calendar/Calendar2.vue' //  切换基础版 + 当前日所在周列表
// import Calendar from '@/components/Calendar/Calendar3.vue' //  切换基础版 + 当前日所在周列表 + taliwind css美化样式
// import Calendar from '@/components/Calendar/Calendar4.vue' //  切换基础版 + 当前日所在周列表 + taliwind css美化样式

const startDate = ref(new Date())
const switchUnit = ref<'day' | 'week'>('day')

const updateDate = (newDate: Date) => {
  startDate.value = newDate
}
</script>

<style></style>
