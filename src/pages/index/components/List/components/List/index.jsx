import React, { useState , useCallback } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtAccordion, AtList, AtListItem } from "taro-ui";

import styles from "./styles.module.scss";

const list = [
  { label: "综合排序" },
  { label: "距离最近" },
  { label: "评分最高" },
  { label: "起送价最低" },
  { label: "配送费最低" },
];
const Bar = () => {
  const [open, setOpen] = useState(false);
  const onHandleClick = useCallback(() => {
    //
  }, []);

  return (
    <View className={styles.wrap}>
      <AtAccordion open={open} onClick={onHandleClick} title='排序'>
        <AtList hasBorder={false}>
          {list.map((item, index) => (
            <AtListItem
              key={index}
              title={item.label}
              // arrow="right"
              // thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            />
          ))}
        </AtList>
      </AtAccordion>
    </View>
  );
};

export default Bar;
