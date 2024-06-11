<template>
  <view class="calendar-container">
    <view class="nav-buttons">
      <button @click="prev" class="btn">前一天</button>
      <text class="date">{{ formattedDate }}</text>
      <button @click="next" class="btn">后一天</button>
    </view>
    <view class="week-container">
      <view v-for="date in currentWeek" :key="date" class="day-item">
        <text class="day-name">{{ formatDate(date, 'EEEEE') }}</text>
        <text class="day-date">{{ formatDate(date, 'MM/dd') }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { format, addDays, addWeeks, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default {
  props: {
    startDate: {
      type: Date,
      required: true
    },
    switchUnit: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return format(this.startDate, 'yyyy年MM月dd日 EEEE', { locale: zhCN })
    },
    currentWeek() {
      const start = startOfWeek(this.startDate, { locale: zhCN })
      const end = endOfWeek(this.startDate, { locale: zhCN })
      return eachDayOfInterval({ start, end })
    }
  },
  methods: {
    prev() {
      let newDate
      if (this.switchUnit === 'day') {
        newDate = addDays(this.startDate, -1)
      } else if (this.switchUnit === 'week') {
        newDate = addWeeks(this.startDate, -1)
      }
      this.$emit('update-date', newDate)
    },
    next() {
      let newDate
      if (this.switchUnit === 'day') {
        newDate = addDays(this.startDate, 1)
      } else if (this.switchUnit === 'week') {
        newDate = addWeeks(this.startDate, 1)
      }
      this.$emit('update-date', newDate)
    },
    formatDate(date, dateFormat) {
      return format(date, dateFormat, { locale: zhCN })
    }
  },
  watch: {
    switchUnit() {
      this.$emit('update-date', new Date(this.startDate)) // Trigger re-calculation of current week
    }
  }
}
</script>

<style>
.calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
.nav-buttons {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.btn {
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 8px;
}
.date {
  font-size: 18px;
  font-weight: 600;
}
.week-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}
.day-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}
.day-name {
  color: #6b7280;
}
.day-date {
  font-size: 16px;
  font-weight: 500;
}
</style>
