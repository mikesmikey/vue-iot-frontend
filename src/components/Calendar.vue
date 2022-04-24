<template>
  <div class="calendar">
    <div class="row" v-for="i in 6" :key="i">
      <CalendarCard v-for="j in 7" :key="indexByRowAndColumn(i, j)"
        :recordPerDayData="calendarData[indexByRowAndColumn(i, j)]" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mappingNumberofRecordByMonth } from '@/services/dataService.js'
import CalendarCard from '@/components/CalendarCard.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CalendarCard
  },
  props: {
    sensorData: {
      type: Array[Object],
      required: true,
      default: [],
    }
  },
  data() {
    return {
      calendarData: []
    }
  },
  beforeMount() {
    this.calendarData = this.calculateCalendar();
  },
  methods: {
    calculateCalendar: function () {
      return mappingNumberofRecordByMonth(this.sensorData)
    },
    indexByRowAndColumn(row, column) {
      return ((row - 1) * 7) + (column - 1)
    }
  },
}
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
}

.calendar>.row {
  display: flex;
  padding-bottom: 5px;
}

.row>.calendar-card {
  padding-left: 5px;
  padding-right: 5px;
}
</style>