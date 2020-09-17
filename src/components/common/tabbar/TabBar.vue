<template lang="html">
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="css" scoped>
#tabbar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  height: 49px;
  box-shadow: 0 -1px 3px 1px rgba(0, 0, 0, 0.1);
}
</style>
