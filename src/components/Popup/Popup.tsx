import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  Image,
  Pressable,
} from 'react-native';
import { OverLay } from '../Overlay/Overlay';
import { useTheme } from '../ThemeConfig/ThemeConfig';
export interface PopupProps {
  visible?: boolean;
  position?: 'bottom' | 'center' | 'top';
  height?: number;
  width?: number | string;
  round?: boolean;
  closeable?: boolean;
  closeOnOverlayPress?: boolean;
  overlayStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onClose: () => void;
}
const DURATION = 250;
export const Popup: React.FC<PopupProps> = ({
  visible = false,
  position = 'center',
  height,
  width,
  round = false,
  closeable = false,
  closeOnOverlayPress = false,
  overlayStyle,
  style,
  children,
  onClose,
}) => {
  const { theme } = useTheme();

  const radius = theme['$popup-border-radius'] ?? 10;
  const minHeight = theme['$popup-height'] ?? 100;
  const centerRadius = theme['$popup-center-border-radius'] ?? 10;
  const closeIconSize = {
    width: theme['$popup-closeicon-width'] ?? 12,
    height: theme['$popup-closeicon-height'] ?? 12,
  };

  const progress = useRef(new Animated.Value(visible ? 1 : 0)).current;
  const [mounted, setMounted] = useState(visible);

  useEffect(() => {
    if (visible) setMounted(true);

    Animated.timing(progress, {
      toValue: visible ? 1 : 0,
      duration: DURATION,
      easing: visible
        ? Easing.out(Easing.cubic)
        : Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && !visible) {
        setMounted(false);
      }
    });
  }, [visible, progress]);

  if (!mounted) return null;
  const baseStyle: ViewStyle = {
    backgroundColor: '#fff',
    ...(height ? { height } : { minHeight }),
    width:
      position === 'center'
        ? (width ?? 300) as ViewStyle['width']
        : '100%',
  };
  if (position !== 'center') {
    //上弹出层or下弹出层
    Object.assign(baseStyle, {
      position: 'absolute',
      left: 0,
      right: 0,
      ...(position === 'bottom' ? { bottom: 0 } : { top: 0 }),
    });
  }
  if (round) {
    if (position === 'center') {
      baseStyle.borderRadius = centerRadius;
    } else if (position === 'bottom') {
      baseStyle.borderTopLeftRadius = radius;
      baseStyle.borderTopRightRadius = radius;
    } else {
      baseStyle.borderBottomLeftRadius = radius;
      baseStyle.borderBottomRightRadius = radius;
    }
  }
  const animatedStyle =
    position === 'center'
      ? { opacity: progress }
      : {
          transform: [
            {
              translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  position === 'bottom'
                    ? height ?? minHeight
                    : -(height ?? minHeight),
                  0,
                ],
              }),
            },
          ],
        };

  return (
    <OverLay
      visible={mounted}
      overlayStyle={overlayStyle}
      onOverlayPress={closeOnOverlayPress ? onClose : undefined}
    >
      <Animated.View style={[baseStyle, animatedStyle, style]}>
        {children}

        {closeable && (
          <Pressable
            hitSlop={15}
            onPress={onClose}
            style={{
              position: 'absolute',
              right: 10,
              [position === 'top' ? 'bottom' : 'top']: 10,
            }}
          >
            <Image
              source={require('./assets/icon-close.png')}
              style={closeIconSize}
            />
          </Pressable>
        )}
      </Animated.View>
    </OverLay>
  );
};

Popup.displayName = 'Popup';
