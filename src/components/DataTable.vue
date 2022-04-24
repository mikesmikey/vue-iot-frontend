<template lang="html">
  <div class="data-table">
    <vs-table :data="users" stripe>
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
            {{ data[indextr].timestamp }}
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
  data: () => ({
    users: [
      {
        id: 1,
        timestamp: "2020-07-08T08:22:20.348Z",
        data: 854762.82,
        data2: null,
      },
      {
        id: 2,
        timestamp: "2020-07-08T08:22:20.348Z",
        data: 854762.82,
        data2: null,
      },
      {
        id: 3,
        timestamp: "2020-07-08T08:22:20.348Z",
        data: 854762.82,
        data2: null,
      },
      {
        id: 4,
        timestamp: "2020-07-08T08:22:20.348Z",
        data: 854762.82,
        data2: 231.25,
      },
      {
        id: 5,
        timestamp: "2020-07-08T08:22:20.348Z",
        data: 854762.82,
        data2: null,
      },
    ],
  }),
};
</script>

<style scoped>
.data-table {
  text-align: start;
}
</style>