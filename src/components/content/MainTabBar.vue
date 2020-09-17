<template lang="html">
  <tab-bar>
    <tab-bar-item link="/home" activeColor="#ff5777">
      <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="" />
      <img
        src="~assets/img/tabbar/home_active.svg"
        slot="item-icon-active"
        alt=""
      />
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="#ff5777">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt="" />
      <img
        src="~assets/img/tabbar/category_active.svg"
        slot="item-icon-active"
        alt=""
      />
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="#ff5777">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" alt="" />
      <img
        src="~assets/img/tabbar/shopcart_active.svg"
        slot="item-icon-active"
        alt=""
      />
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="#ff5777">
      <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt="" />
      <img
        src="~assets/img/tabbar/profile_active.svg"
        slot="item-icon-active"
        alt=""
      />
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="css" scoped></style>
