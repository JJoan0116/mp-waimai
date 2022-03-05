/**
 * 路由配置
 * pages开头是主包
 * package开头是分包
 */
export const routerName = {
  index: "/pages/index/index",
  order: "/pages/order/index",
  shop: "/pages/shop/index",
};

export default {
  pages: Object.keys(routerName).map((item) =>routerName[item].substr(1)),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: routerName.index.substr(1),
        text: "首页",
        iconPath: "./assets/images/tabbar/index-normal.png",
        selectedIconPath: "./assets/images/tabbar/index-active.png",
      },
      {
        pagePath: routerName.order.substr(1),
        text: "订单",
        iconPath: "./assets/images/tabbar/order-normal.png",
        selectedIconPath: "./assets/images/tabbar/order-active.png",
      },
    ],
    color: "#838383",
    selectedColor: "#FF5354",
  },
};
