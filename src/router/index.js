import Vue from 'vue'
import VueRouter from 'vue-router'
import Summary from '../views/Summary.vue'
import SensorData from '../views/SensorData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/sensor-data',
    name: 'SensorData',
    component: SensorData,
  }
]

const router = new VueRouter({
  routes
})

export default router
