// import { resolve } from "path";
module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("assets", resolve("src/assets"))
  //     .set("common", resolve("src/common"))
  //     .set("components", resolve("src/components"))
  //     .set("network", resolve("src/network"));
  // }
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network,"
      }
    }
  }
};
