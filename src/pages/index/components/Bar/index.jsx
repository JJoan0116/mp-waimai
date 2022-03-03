import React from "react";
import { View, Image, Text } from "@tarojs/components";

import bar1 from "./images/bar-1.svg";
import bar2 from "./images/bar-2.svg";
import bar3 from "./images/bar-3.svg";
import bar4 from "./images/bar-4.svg";
import bar5 from "./images/bar-5.svg";
import bar6 from "./images/bar-6.svg";
import bar7 from "./images/bar-7.svg";
import bar8 from "./images/bar-8.svg";
import styles from "./styles.module.scss";

const list = [
  { label: "饺子馄饨", icon: bar1 },
  { label: "薯条汉堡", icon: bar2 },
  { label: "意面披萨", icon: bar3 },
  { label: "包子粥店", icon: bar4 },
  { label: "快餐便当", icon: bar5 },
  { label: "米粉面馆", icon: bar6 },
  { label: "麻辣烫冒菜", icon: bar7 },
  { label: "地方菜系", icon: bar8 },
];
const Bar = () => {
  return (
    <View className={styles.wrap}>
      {list.map((item, index) => (
        <View className={styles.item} key={index}>
          <View className={styles.imgWrap}>
            <Image className={styles.img} src={item.icon} />
          </View>
          <Text className={styles.labal}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Bar;
