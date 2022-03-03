import React, { useState, useCallback } from "react";
import { View, Text } from "@tarojs/components";
import { AtAccordion, AtList, AtListItem } from "taro-ui";

import styles from "./styles.module.scss";

const list = [
  { label: "综合排序", value: 0 },
  { label: "距离最近", value: 1 },
  { label: "评分最高", value: 2 },
  { label: "起送价最低", value: 3 },
  { label: "配送费最低", value: 4 },
];

const btnList = [
  { label: "销量高", value: 0 },
  { label: "速度快", value: 1 },
];

const ListBar = () => {
  const [open, setOpen] = useState(false);
  const [accordionVal, setAccordionVal] = useState(0);
  const [btnVal, setBtnVal] = useState(-1);

  const onHandleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const onClickAccordion = useCallback((item) => {
    setOpen(false);
    setAccordionVal(item.value);
    setBtnVal(-1);
  }, []);

  const onClickBtn = useCallback((v) => {
    setOpen(false);
    setBtnVal(v.value);
    setAccordionVal(0);
  }, []);

  return (
    <View className={styles.wrap}>
      <AtAccordion
        className={styles.accordion}
        open={open}
        onClick={onHandleClick}
        title={list[accordionVal].label}
      >
        <AtList hasBorder={false}>
          {list.map((item, index) => (
            <AtListItem
              key={index}
              title={item.label}
              onClick={() => onClickAccordion(item)}
            />
          ))}
        </AtList>
      </AtAccordion>

      {btnList.map((item, index) => (
        <Text
          key={index}
          className={`${styles.btn} ${
            btnVal === item.value ? styles.active : ""
          }`}
          onClick={() => onClickBtn(item)}
        >
          {item.label}
        </Text>
      ))}
    </View>
  );
};

export default ListBar;
