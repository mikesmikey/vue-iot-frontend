<template lang="html">
  <div class="data-table">
    <vs-table pagination :data="sensorData" max-items="50" stripe>
      <template slot="header">
        <h3>
          List Table
        </h3>
      </template>
      <template slot="thead">
        <vs-th> Id </vs-th>
        <vs-th> Timestamp </vs-th>
        <vs-th> Data </vs-th>
        <vs-th> Data 2 </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>

          <vs-td :data="data[indextr].timestamp">
            {{ new Date(data[indextr].timestamp) }}
          </vs-td>

          <vs-td :data="data[indextr].data">
            {{ data[indextr].data }}
          </vs-td>

          <vs-td :data="data[indextr].data2">
            {{ data[indextr].data2 }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>

export default {
  props: {
    sensorData: {
      type: Array[Object],
      required: true,
      default: []
    }
  },
};
</script>

<style scoped>
.data-table {
  text-align: start;
}
</style>