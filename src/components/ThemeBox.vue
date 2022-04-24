<template>
  <vs-col class="theme-box" type="flex" vs-justify="center" vs-align="center">
    <vs-card fixed-height>
      <div class="box-header" slot="header">
        <div class="header-content">
          <span class="material-icons">{{ header.icon }}</span>
          <h3 style="padding-left: 6px">{{ header.text }}</h3>
        </div>
      </div>
      <slot />
    </vs-card>
  </vs-col>
</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.theme-box>.con-vs-card>.vs-card--header>.box-header>.header-content {
  display: flex;
  align-items: center;
}

.theme-box>.con-vs-card {
  border-radius: 0;
}

.theme-box>.con-vs-card>.vs-card--header {
  background-color: #46c93a;
  color: white;
}
</style>