import React, { useCallback } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import { routerName } from "../../../../../../app.config";

import styles from "./styles.module.scss";

const list = [1, 2, 3, 4, 5];
const List = () => {
  const onItemClick = useCallback(() => {
    Taro.navigateTo({ url: routerName.shop });
  }, []);

  return (
    <View className={styles.wrap}>
      {list.map((item) => (
        <View key={item} className={styles.item} onClick={onItemClick}>
          <View className={styles.imgWrap}>
            <Image className={styles.img} src='' />
          </View>
          <View className={styles.info}>
            <View className={`${styles.title} ${styles.ellipsis}`}>
              杨国福麻辣烫
            </View>
            <View className={styles.shop}>
              <View className={styles.shopItem}>
                <View className={styles.score}>
                  <AtIcon value='star-2' size='10' color='#FF5354'></AtIcon>
                  &nbsp;4.8
                </View>
                <Text className={styles.sales}>月售1085</Text>
              </View>

              <View className={styles.shopItem}>
                <Text className={styles.time}>30分钟</Text>
                <Text className={styles.distance}>2.2km</Text>
              </View>
            </View>
            <View className={styles.price}>
              <Text className={styles.priceItem}>起送 ¥20</Text>
              <Text className={styles.priceItem}>免费配送</Text>
              <Text className={styles.priceItem}>人均 ¥20</Text>
            </View>
            <Text className={styles.praise}>“真不错啊真的很不错”</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default List;
