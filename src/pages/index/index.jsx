import React, { useState, useCallback } from "react";
import { View, Text } from "@tarojs/components";
import { AtInput, AtIcon, AtSearchBar } from "taro-ui";

import Bar from "./components/Bar";
import List from "./components/List";
import styles from "./styles.module.scss";

const App = () => {
  const [searchValue, setSearchValue] = useState();

  const onChangeSearchVal = useCallback((v) => {
    setSearchValue(v);
  }, []);

  const onSearch = useCallback(() => {
    //
  }, []);
  console.log(111, styles);

  return (
    <View className={styles.wrap}>
      <View className={styles.contain}>
        <AtSearchBar
          actionName='搜一下美食'
          value={searchValue}
          onChange={onChangeSearchVal}
          onActionClick={onSearch}
        />
        <Bar />
        <List />
      </View>
    </View>
  );
};

export default App;
