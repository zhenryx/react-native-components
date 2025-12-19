import React from "react";
import { Image, StyleSheet, View, ImageSourcePropType, ViewStyle, StyleProp, TextStyle } from "react-native";
import { Text } from "../Text/Text";
export interface EmptyProps {
  children?: React.ReactNode;
  img?: ImageSourcePropType;
  width?: number;
  height?: number;
  desc?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

const defaultImage = require('./assets/icon-empty.png');

export const Empty: React.FC<EmptyProps> = ({
  children,
  img,
  width = 120,
  height = 100,
  desc = "数据消失了～",
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.empty_view, style]}>
      <Image 
        source={img || defaultImage} 
        style={[styles.empty_icon, { width, height }]} 
      />
      <Text style={[styles.empty_text, textStyle]}>{desc}</Text>
      {children}
    </View>
  );
};
Empty.displayName='Empty'
const styles = StyleSheet.create({
  empty_view: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  empty_icon: {
    resizeMode: "contain",
  },
  empty_text: {
    color: '#999',
    fontSize: 14,
    marginVertical: 15,
    textAlign: "center",
  },
});