<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex justify-center items-center mb-4">
      <button @click="prev" class="mx-2">前一天</button>
      <span>{{ formattedDate }}</span>
      <button @click="next" class="mx-2">后一天</button>
    </div>
    <div class="flex space-x-2">
      <div v-for="(date, index) in currentWeek" :key="index" class="flex flex-col items-center">
        <span>{{ formatDate(date, 'EEEEE') }}</span>
        <span>{{ formatDate(date, 'MM/dd') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, watch } from 'vue'
import { format, addDays, addWeeks, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns'
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
  let newDate: Date | any
  if (props.switchUnit === 'day') {
    newDate = addDays(props.startDate, -1)
  } else if (props.switchUnit === 'week') {
    newDate = addWeeks(props.startDate, -1)
  }
  emit('update-date', newDate)
}

const next = () => {
  let newDate: Date | any
  if (props.switchUnit === 'day') {
    newDate = addDays(props.startDate, 1)
  } else if (props.switchUnit === 'week') {
    newDate = addWeeks(props.startDate, 1)
  }
  emit('update-date', newDate)
}

const currentWeek = computed(() => {
  const start = startOfWeek(props.startDate, { locale: zhCN })
  const end = endOfWeek(props.startDate, { locale: zhCN })
  return eachDayOfInterval({ start, end })
})

const formatDate = (date: Date, dateFormat: string) => {
  return format(date, dateFormat, { locale: zhCN })
}

// Watch for changes in switchUnit to update the current week
watch(
  () => props.switchUnit,
  () => {
    emit('update-date', new Date(props.startDate)) // Trigger re-calculation of current week
  }
)
</script>

<style scoped>
/* 使用 UnoCSS 的内联类名来进行样式处理，无需在此添加样式 */
</style>
