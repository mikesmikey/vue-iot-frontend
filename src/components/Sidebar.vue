<template lang="html">
  <vs-sidebar :parent="$refs.sidebarRef" static-position default-index="1" color="success" spacer v-model="active"
    hidden-background>
    <vs-sidebar-item index="1" icon="summarize" to="/">
      Summary
    </vs-sidebar-item>
    <vs-sidebar-item index="2" icon="sensors" to="/sensor-data">
      Sensor Data
    </vs-sidebar-item>
    <vs-divider />
    <vs-sidebar-group open title="Device Management">
      <vs-sidebar-item index="3.1" icon="edgesensor_high">
        Sensor
      </vs-sidebar-item>
      <vs-sidebar-item index="3.2" icon="meeting_room">
        Gateway
      </vs-sidebar-item>
      <vs-sidebar-item index="3.3" icon="photo_camera">
        Camera
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-group title="Manage Work">
      <vs-sidebar-item index="4.1" icon="work">
        Work Management
      </vs-sidebar-item>
      <vs-sidebar-item index="4.2" icon="badge">
        Work Status
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-group title="Setting">
      <vs-sidebar-item index="5.1" icon="info">
        Alert
      </vs-sidebar-item>
      <vs-sidebar-item index="5.2" icon="wifi">
        Network
      </vs-sidebar-item>
      <vs-sidebar-item index="5.3" icon="explore">
        Location Setting
      </vs-sidebar-item>
      <vs-sidebar-item index="5.4" icon="account_circle">
        User
      </vs-sidebar-item>
      <vs-sidebar-item index="5.5" icon="transfer_within_a_station">
        Permission Setting
      </vs-sidebar-item>
      <vs-sidebar-item index="5.6" icon="list_alt">
        Form
      </vs-sidebar-item>
    </vs-sidebar-group>
    <div class="footer-sidebar" slot="footer">
      <vs-button icon="reply" color="danger" type="flat">Log Out</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>

export default {
  data: () => ({
    active: false,
  }),
};
</script>

<style scoped>
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.footer-sidebar>button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}

.vs-content-sidebar {
  height: 100%;
}

.vs-sidebar--item a {
  padding: 0;
}
</style>