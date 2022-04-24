<template>
  <div class="summary-view">
    <ThemeBox :header="{
      text: 'Summary',
      icon: 'summarize',
    }">
      <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
        :height="height" />
    </ThemeBox>
  </div>
</template>

<script>
import ThemeBox from '@/components/ThemeBox.vue';
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

// eslint-disable-next-line no-unused-vars
import { getDataFromBackend, mappingNumberofRecordByMonth } from '@/services/dataService.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'LineChart',
  components: {
    ThemeBox, LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 500
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      recordMonthData: [],
      chartData: {
        labels: ['-'],
        datasets: [
          {
            label: 'Records Recieved in July 2020',
            backgroundColor: '#FF4757',
            data: [0]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async beforeCreate() {
    let res = await getDataFromBackend()
    this.recordMonthData = mappingNumberofRecordByMonth(res.data.sort().reverse());
  },
  watch: {
    recordMonthData(newVal) {
      this.chartData = {
        labels: newVal.map(elem => elem.dayString),
        datasets: [
          {
            label: 'Records Recieved in July 2020',
            backgroundColor: '#FF4757',
            data: newVal.map(elem => elem.recordAmount)
          }
        ]
      }
    } 
  }
}
</script>