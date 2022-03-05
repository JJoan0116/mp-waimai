import React from "react";
import { View } from "@tarojs/components";

import ListBar from "./components/ListBar";
import List from "./components/List";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <View className={styles.wrap}>
      <ListBar />
      <List />
    </View>
  );
};

export default App;
