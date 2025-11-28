import React, { useRef, useEffect, useMemo } from "react";
import { OverLay } from "../Overlay/Overlay";
import { Animated, Easing, StyleProp, ViewStyle, Image, Pressable } from "react-native";
import { useTheme } from "../ThemeConfig/ThemeConfig";
const ANIMATION_DURATION = 200
// 组件必须有关闭事件（遮罩层和图标关闭一致）
export interface PopupProps {
  visible?: boolean
  position?: 'bottom' | 'center' | 'top'
  height?: number
  width?: number | string
  closeable?: boolean
  closeOnOverlayPress?: boolean
  overlayStyle?: StyleProp<ViewStyle>//渗透根部的遮罩层
  round?: boolean
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode;
  onClose: () => void
}
export const Popup: React.FC<PopupProps> = (props) => {
  const {
    visible = false,
    position = 'center',
    height,
    width,
    overlayStyle,
    round = false,
    closeable = true,
    closeOnOverlayPress = false,
    children,
    onClose,
    style
  } = props
  const { theme } = useTheme()
  const centerPopRadius = theme['$popup-center-border-radius'] || 10
  const radius = theme['$popup-border-radius'] || 10
  const h = height || theme['$popup-height'] || 200
  const closeIconWidth = theme['$popup-closeicon-width'] || 12
  const closeIconHeight = theme['$popup-closeicon-height'] || 12
  const closeIconStyle = useMemo(() => ({
    width: closeIconWidth,
    height: closeIconHeight,
  }), [closeIconWidth, closeIconHeight]);
  const animatedValue = useRef(new Animated.Value(0)).current
  const containerStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      backgroundColor: "#fff",
      height: h,
    };
    const animatedStyle: { transform?: Array<{ translateY: any }>, opacity?: any } = {};
    if (position === 'center') {
      baseStyle.width = width || 300;
      if (round) {
        baseStyle.borderRadius = centerPopRadius;
      }
      animatedStyle.opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
    } else {
      baseStyle.position = 'absolute';
      baseStyle.left = 0;
      baseStyle.right = 0;
      baseStyle.width = '100%';
      if (position === 'bottom') {
        baseStyle.bottom = 0;
        if (round) {
          baseStyle.borderTopLeftRadius = radius;
          baseStyle.borderTopRightRadius = radius;
        }
        animatedStyle.transform = [{
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [h, 0],
          })
        }];
      } else if (position === 'top') {
        baseStyle.top = 0;
        if (round) {
          baseStyle.borderBottomLeftRadius = radius;
          baseStyle.borderBottomRightRadius = radius;
        }
        animatedStyle.transform = [{
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-h, 0],
          })
        }];
      }
    }
    return [baseStyle, animatedStyle];
  }, [position, width, round, animatedValue, h, radius])
  const closeButtonPressableStyle = useMemo((): ViewStyle => {
    if (position === 'top') {
      return {
        position: 'absolute',
        right: 10,
        bottom: 10,
        zIndex: 999,
      };
    }
    return {
      position: 'absolute',
      right: 10,
      top: 10,
      zIndex: 999,
    };
  }, [position]);
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: ANIMATION_DURATION,
      easing: Easing.ease,
      useNativeDriver: true
    }).start()
  }, [visible, animatedValue])
  return (
    <OverLay
      visible={visible}
      overlayStyle={overlayStyle}
      onOverlayPress={closeOnOverlayPress ? onClose : undefined}>
      <Animated.View style={[...containerStyle, style]}>
        {children}
        {closeable && (
          <Pressable
            hitSlop={15}
            onPress={onClose}
            style={closeButtonPressableStyle}>
            <Image
              source={require('./assets/icon-close.png')}
              style={closeIconStyle} />
          </Pressable>
        )}
      </Animated.View>
    </OverLay>
  )
}
