<template>
  <div class="sensor-data-view">
    <div class="data-row-1">
      <ThemeBox v-for="(elem, index) in row1Data" :key="index" :header="elem.header">
        <div class="data-row-1-value">
          {{ elem.value }}
        </div>
      </ThemeBox>
    </div>
    <div class="data-row-2">
      <ThemeBox :header="{
        text: 'Recieved Data from IOT Devices',
        icon: 'smart_toy',
      }">
        <div class="view-select-bar">
          <button class="view-change-button" v-on:click="(e) => { onChangeViewClick(e, 'list') }">
            <vs-chip class="view-change-chip" color="success" transparent>
              <span class="material-icons">
                list
              </span> List
            </vs-chip>
          </button>
          <button class="view-change-button" v-on:click="(e) => { onChangeViewClick(e, 'calendar') }">
            <vs-chip color="success" transparent>
              <span class="material-icons">
                calendar_month
              </span> calendar
            </vs-chip>
          </button>
        </div>
        <div class="view-canvas">
          <DataTable v-if="currentView === 'list'" :sensorData="sensorData" />
          <Calendar v-else :sensorData="sensorData" />
        </div>
      </ThemeBox>
    </div>
  </div>
</template>

<script>
import { getDataFromBackend } from '../services/dataService';
// @ is an alias to /src
import ThemeBox from "@/components/ThemeBox.vue";
import DataTable from '@/components/DataTable.vue'
import Calendar from "../components/Calendar.vue";

export default {
  name: 'Home',
  components: {
    ThemeBox,
    DataTable,
    Calendar
  },
  async beforeMount() {
    let res = await getDataFromBackend()
    this.sensorData = res.data.sort().reverse();
  },
  data() {
    return {
      currentView: "list",
      row1Data: [
        {
          header: { text: "Upcoming Tasks", icon: "error_outline" },
          value: 1,
        },
        {
          header: { text: "Late tasks", icon: "assignment_late" },
          value: 5,
        },
        {
          header: { text: "Open Tasks", icon: "open_in_full" },
          value: 0,
        },
        {
          header: { text: "Completed Tasks", icon: "check" },
          value: 1,
        },
        {
          header: { text: "Overdue Tasks", icon: "alarm" },
          value: 2,
        },
        {
          header: { text: "Time Spent", icon: "schedule" },
          value: "24 hr",
        },
      ],
      sensorData: {},
    };
  },
  methods: {
    onChangeViewClick: function (_, viewType) {
      this.currentView = viewType
    }
  },
}
</script>

<style>
.view-change-button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.data-row-1 {
  display: flex;
  padding-bottom: 15px;
  overflow-x: auto;
}

.data-row-1>* {
  padding-left: 20px;
  padding-right: 20px;
}

.data-row-1-value {
  font-size: 2rem;
  padding-top: 20px;
  padding-bottom: 20px;
}

.view-select-bar {
  display: flex;
  padding-bottom: 20px;
}

.sensor-data-view {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.data-row-2 {
  flex: 1;
}
</style>
