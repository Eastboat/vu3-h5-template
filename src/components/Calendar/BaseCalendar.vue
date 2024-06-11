<template>
  <div class="flex justify-center items-center">
    <button @click="prev" class="mx-2">前一天</button>
    <span>{{ formattedDate }}</span>
    <button @click="next" class="mx-2">后一天</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { format, addDays, addWeeks } from 'date-fns'
import { zhCN } from 'date-fns/locale'

const props = defineProps<{
  startDate: Date
  switchUnit: 'day' | 'week'
}>()

const emit = defineEmits<{
  (e: 'update-date', newDate: Date): void
}>()

const formattedDate = computed(() => {
  return format(props.startDate, 'yyyy年MM月dd日 EEEE', { locale: zhCN })
})

const prev = () => {
  let newDate = undefined
  if (props.switchUnit === 'day') {
    newDate = addDays(props.startDate, -1)
  } else if (props.switchUnit === 'week') {
    newDate = addWeeks(props.startDate, -1)
  }
  emit('update-date', newDate)
}

const next = () => {
  let newDate = undefined
  if (props.switchUnit === 'day') {
    newDate = addDays(props.startDate, 1)
  } else if (props.switchUnit === 'week') {
    newDate = addWeeks(props.startDate, 1)
  }
  emit('update-date', newDate)
}
</script>

<style scoped>
/* 使用 UnoCSS 的内联类名来进行样式处理，无需在此添加样式 */
</style>
