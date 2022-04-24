<template>
  <div class="calendar">
    <div class="row">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
    </div>
    <div class="row">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
    </div>
    <div class="row">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
    </div>
    <div class="row">
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
      <CalendarCard />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CalendarCard from '@/components/CalendarCard.vue'
export default {
  components: {
    CalendarCard
  },
  data() {
    console.log(moment().daysInMonth());
    return {

    }
  },
  methods: {

  }
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