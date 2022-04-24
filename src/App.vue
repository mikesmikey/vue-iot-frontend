<template>
  <div id="app">
    <Navbar />
    <div class="content-container">
      <div class="content">
        <div class="sidebar-container">
          <Sidebar />
        </div>
        <div class="canvas-area-container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-container {
  height: 0;
  flex: 1;
}

.content {
  height: 100%;
  max-height: 100%;
  display: flex;
}

.sidebar-container {
  flex: 1;
  max-width: 260px;
  height: 100%;
}

.canvas-area-container {
  flex: 1;
  height: 100%;
  max-height: 100%;
  padding: 12px;
  overflow: auto;
}
</style>
