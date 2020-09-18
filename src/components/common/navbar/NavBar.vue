<template lang="html">
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.navbar .center {
  flex: auto;
}
.navbar .left,
.navbar .right {
  width: 60px;
}
</style>
