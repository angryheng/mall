<template lang="html">
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultiData } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      dKeywords: [],
      keywords: []
    };
  },

  components: {
    NavBar
  },
  created() {
    getHomeMultiData().then(_ret => {
      if (_ret.returnCode.toUpperCase() === "SUCCESS" && _ret.success) {
        const { banner, recommend, dKeyword, keywords } = _ret.data;
        console.log(banner);
        this.banner = banner.list;
        this.recommend = recommend.list;
        this.dKeywords = dKeyword.list;
        this.keywords = keywords.list;
      }
    });
  }
};
</script>

<style lang="css" scoped>
.navbar-home {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
