import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  Easing,
} from 'react-native';
import { useTheme } from '../ThemeConfig/ThemeConfig';

export interface OverLayProps {
  children?: React.ReactNode;
  visible: boolean;
  overlayStyle?: StyleProp<ViewStyle>;
  onOverlayPress?: () => void;
}
export const OverLay: React.FC<OverLayProps> = ({
  children,
  visible,
  overlayStyle,
  onOverlayPress,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(visible);
  const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    if (visible) {
      setMounted(true);
    }
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 250,
      easing:Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && !visible) {
        setMounted(false);
      }
    });
  }, [visible, opacity]);
  if (!mounted) return null;
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: theme['$overlay-bg-color'] ?? 'rgba(0,0,0,0.35)' },
        { opacity },
        overlayStyle,
      ]}
    >
      {onOverlayPress && (
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onOverlayPress}
        />
      )}
      <View style={styles.content} pointerEvents="box-none">
        {children}
      </View>
    </Animated.View>
  );
};

OverLay.displayName = 'OverLay';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
