import React from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtAccordion, AtList, AtListItem } from "taro-ui";

import Accordion from "./components/ListBar";
import styles from "./styles.module.scss";

const Bar = () => {
  return (
    <View className={styles.wrap}>
      <Accordion />
    </View>
  );
};

export default Bar;
