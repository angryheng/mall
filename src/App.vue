<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "hello vue"
    };
  },
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
