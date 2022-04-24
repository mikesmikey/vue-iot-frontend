<template>
  <div class="navbar">
    <vs-navbar v-model="activeItem" :color="navbarColor" text-color="rgba(255,255,255,1)"
      active-text-color="rgba(255,255,255,1)">
      <div slot="title">
        <a href="/">
          <div class="logo-container">
            <img class="logo-image" src="../assets/sentenance_logo.png" alt="logo" />
          </div>
        </a>
      </div>
      <vs-input class="search-input" size="default" icon-after="true" icon="search" v-model="search"
        placeholder="Search Here" />
      <vs-navbar-item index="0">
        <a href="#"><span class="material-icons-outlined">
            format_list_bulleted
          </span>
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#"><span class="material-icons-outlined">
            grid_view
          </span>
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#"><span class="material-icons-outlined">
            map
          </span>
        </a>
      </vs-navbar-item>
      <div class="spacer"></div>
      <vs-navbar-item index="3">
        <a href="#"><span class="material-icons-outlined">
            notifications
          </span>
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <a href="#"><span class="material-icons-outlined">
            mode_comment
          </span>
        </a>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <a class="user-nav-button" href="#">
          <span class="user-name-text">
            Hi, Kraiwich
          </span>
          <vs-avatar text="K" color="danger" />
        </a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    navbarColor: "#666666",
    activeItem: null,
    search: "",
  }),
};
</script>

<style>
.search-input {
  margin-right: 20px;
}

.search-input>.vs-con-input {
  justify-content: center;
}

.search-input>.vs-con-input>.vs-inputx {
  font-size: 1.2rem;
  /* padding-top: 0.2rem;
    padding-bottom: 0.2rem; */
}

.search-input>.vs-con-input>.input-span-placeholder {
  text-align: left;
  font-size: 1rem;
  padding-top: 10px;
}

.navbar>.vs-navbar>.vs-con-items {
  flex: 1;
}
</style>

<style scoped>
.logo-image {
  height: 100%;
  width: auto;
}

.logo-container {
  height: 50px;
  margin: 10px;
}

.vs-navbar {
  justify-content: flex-start;
}

.spacer {
  flex-grow: 1;
}

.user-nav-button {
  padding-top: 0px;
  padding-bottom: 0px;
  align-items: center;
  display: flex;
}

.user-name-text {
  padding-left: 5px;
  padding-right: 5px;
  font-size: 1rem;
}
</style>