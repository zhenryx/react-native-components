import React, { ComponentType, useMemo } from "react";
import { ImageSourcePropType, ImageStyle, Pressable, StyleProp, TextStyle, ViewStyle, Image, View } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "../ThemeConfig/ThemeConfig";
type ButtonFill = 'solid' | 'outline';
export interface ButtonProps {
  title: string;
  InnerComponent?: ComponentType<any>; // 支持渐变
  linearGradientProps?: Record<string, any>;
  fill?: ButtonFill;
  width?: ViewStyle['width'];
  fullWidth?: boolean;
  height?: number;
  onPress?: () => void;
  color?: string; // solid背景、outline边框与文本
  feedbackEffect?: boolean; // 是否开启点击反馈的样式效果
  disabled?: boolean;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  iconPosition?: 'left' | 'right';
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
export const Button: React.FC<ButtonProps> = React.memo(
  ({
    InnerComponent = View,
    linearGradientProps,
    title,
    fill = 'solid',
    width = 120,
    fullWidth = false,
    height = 36,
    onPress = () => { },
    color,
    disabled = false,
    feedbackEffect = true,
    icon,
    iconStyle,
    iconPosition = "right",
    buttonStyle,
    textStyle
  }) => {
    const { theme } = useTheme()
    const defaultColor = theme['$primary-color']
    const actualColor = color || defaultColor;
    const baseViewStyle = useMemo((): ViewStyle => {
      const isOutline = fill === 'outline';
      const isGradient = InnerComponent &&
        ((InnerComponent as any).displayName === 'LinearGradient' ||
          (InnerComponent as any).name === 'LinearGradient');
      return {
        borderRadius: theme['$button-border-radius'],
        borderWidth: isOutline ? 1 : 0,
        borderColor: isOutline ? actualColor : 'transparent',
        backgroundColor: isGradient ? 'transparent' : (isOutline ? '#fff' : actualColor),
        width: fullWidth ? '100%' : width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse',
      };
    }, [width, height, fill, actualColor, fullWidth, iconPosition, theme, InnerComponent]);
    const textColor = fill === 'outline' ? actualColor : '#fff';
    const defaultIconSize = height * 0.5;
    const iconMargin = iconPosition === 'right'
      ? { marginLeft: 5 }
      : { marginRight: 5 };
    const pressableStyle = ({ pressed }: { pressed: boolean }) => [
      { opacity: disabled ? 0.5 : 1 },
      pressed && feedbackEffect && !disabled && { opacity: 0.85 },
    ];
    const InnerComponentStyle: StyleProp<ViewStyle> = [baseViewStyle, buttonStyle];
    const content = (
      <>
        <Text style={[{ color: textColor }, textStyle]}>{title}</Text>
        {icon && (
          <Image
            source={icon}
            style={[{ width: defaultIconSize, height: defaultIconSize, ...iconMargin }, iconStyle]}
          />
        )}
      </>
    );
    return (
      <Pressable
        style={pressableStyle}
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
      >
        <InnerComponent
          {...linearGradientProps}
          style={InnerComponentStyle}
        >
          {content}
        </InnerComponent>
      </Pressable>
    );
  }
)

