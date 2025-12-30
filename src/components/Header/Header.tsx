import React, { useMemo, ReactNode } from "react"
import { View, StyleProp, ViewStyle, TextStyle, Image, StyleSheet, Pressable } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from "../Text/Text"
import { useTheme } from "../ThemeConfig/ThemeConfig"

export interface HeaderProps {
  title?: string,
  backGroundColor?: string,
  leftComponent?: ReactNode,
  centerComponent?: ReactNode,
  rightComponent?: ReactNode,
  containerStyle?: StyleProp<ViewStyle>,
  titleStyle?: StyleProp<TextStyle>,
  showBack?: boolean,
  onBack?: () => void,
}

export const Header: React.FC<HeaderProps> = ({
  title = '自定义头部导航',
  backGroundColor,
  leftComponent,
  centerComponent,
  rightComponent,
  containerStyle,
  titleStyle: customTitleStyle,
  showBack = true,
  onBack
}) => {
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()
  const headerStyle = useMemo<ViewStyle>(() => ({
    height: (theme['$header-height'] || 44) + insets.top,
    paddingTop: insets.top,
    backgroundColor: backGroundColor || theme['$header-background'] || 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme['$header-spacing'] || 15,
  }), [theme, backGroundColor, insets.top])

  const defaultTitleStyle = useMemo<TextStyle>(() => ({
    fontSize: theme['$header-title-fontsize'] || 18,
    fontWeight: theme['$header-title-fontweight'] as TextStyle['fontWeight'] || '500'
  }), [theme])

  const renderLeft = () => {
    if (leftComponent) return leftComponent
    if (!showBack || !onBack) return null
    return (
      <Pressable onPress={onBack} hitSlop={10}>
        <Image source={require('./assets/icon-return.png')} style={styles.icon_return} />
      </Pressable>
    )
  }

  const renderCenter = () => {
    if (centerComponent) return centerComponent
    return <Text style={[defaultTitleStyle, customTitleStyle]}>{title}</Text>
  }

  return (
    <View style={[headerStyle, containerStyle]}>
      <View style={styles.leftContainer}>
        {renderLeft()}
      </View>
      <View style={styles.centerContainer}>
        {renderCenter()}
      </View>
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  icon_return: {
    width: 18,
    height: 22,
    resizeMode: 'contain'
  }
})
Header.displayName='Header'
