import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTheme } from "../ThemeConfig/ThemeConfig";
import {
  Modal,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Animated,
} from "react-native";
export interface OverLayProps {
  useModal?: boolean;
  children?: React.ReactNode;
  visible: boolean;
  overlayStyle?: StyleProp<ViewStyle>;
  onOverlayPress?(): void;
}


export const OverLay: React.FC<OverLayProps> = ({
  useModal = true,
  children,
  visible = false,
  overlayStyle,
  onOverlayPress,
}) => {
  const { theme } = useTheme();
  const [realVisible, setRealVisible] = useState(visible);
  const opacityAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (visible) {
      setRealVisible(true);
    }
    if (fadeInstance.current) {
      fadeInstance.current.stop();
    }

    fadeInstance.current = Animated.timing(opacityAnim, {
      toValue: visible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    });

    fadeInstance.current.start(({ finished }) => {
      if (finished && fadeInstance.current) {
        fadeInstance.current = null;
        if (!visible) {
          setRealVisible(false);
        }
      }
    });

    return () => {
      if (fadeInstance.current) {
        fadeInstance.current.stop();
        fadeInstance.current = null;
      }
    };
  }, [visible]);

  const dynamicBg = theme['$overlay-bg-color'] || 'rgba(0, 0, 0, 0.35)';

  const containerStyle = useMemo(
    () => [
      styles.container,
      { backgroundColor: dynamicBg, opacity: opacityAnim },
      overlayStyle,
    ],
    [dynamicBg, opacityAnim, overlayStyle]
  );

  const renderContent = () => (
    <Animated.View style={containerStyle}>
      {onOverlayPress && (
        <Pressable style={StyleSheet.absoluteFill} onPress={onOverlayPress} />
      )}
      <View style={styles.content} pointerEvents="box-none">
        {children}
      </View>
    </Animated.View>
  );

  if (useModal) {
    return (
      <Modal
        visible={realVisible}
        transparent
        animationType='none'
        statusBarTranslucent
        onRequestClose={onOverlayPress}
      >
        {renderContent()}
      </Modal>
    );
  }

  return realVisible ? renderContent() : null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

OverLay.displayName = 'OverLay';