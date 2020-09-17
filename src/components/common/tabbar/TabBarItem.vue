<template lang="html">
  <div class="tabbar-item" @click="itemToggle">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    link: {
      type: String
    },
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemToggle() {
      this.$router.replace(this.link);
    }
  }
};
</script>

<style lang="css" scoped>
.tabbar-item {
  flex: 1;
  font-size: var(--font-size);
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
