import React from 'react';
import { Text as RNText, TextProps, Platform, StyleSheet } from 'react-native';
/**
 * 自定义 Text 组件
 * 自动修复老安卓机型字体宽度测量不准确导致文本被截断的问题（该问题出现很多年，官方没有修复）
 * 找了几种解决办法，目前这样简便易懂
 */
export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const mergedStyle = StyleSheet.flatten([
    Platform.select({
      android: {
        fontFamily: 'Roboto', //这里随便什么都可以
      },
    }),
    style, 
  ]);
  return <RNText style={mergedStyle} {...props} />;
};