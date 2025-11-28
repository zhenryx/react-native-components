import React, { ReactNode, useMemo } from "react";
import { useTheme } from "../ThemeConfig/ThemeConfig";
import { Modal, View, StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
export interface OverLayProps {
  children?: ReactNode
  visible: boolean
  overlayStyle?: StyleProp<ViewStyle>;
  onOverlayPress?(): void
}
export const OverLay: React.FC<OverLayProps> = ({
  children,
  visible = false,
  overlayStyle,
  onOverlayPress = () => null
}) => {
  const { theme } = useTheme()
  const overlayStyles = useMemo(() => {
    return StyleSheet.create({
      overlay: {
        backgroundColor: theme['$overlay-bg-color'] || 'rgba(0, 0, 0, 0.6)',
        ...StyleSheet.absoluteFillObject
      }
    });
  }, [theme]);
  return (
    <Modal visible={visible} transparent statusBarTranslucent onRequestClose={onOverlayPress}>
      <View style={StyleSheet.flatten([overlayStyles.overlay, overlayStyle])} >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onOverlayPress}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          pointerEvents="box-none"
        >
          {children}
        </View>
      </View>
    </Modal>
  )
}
OverLay.displayName='OverLay'