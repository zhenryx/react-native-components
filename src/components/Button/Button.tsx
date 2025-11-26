import React, { useMemo } from "react";
import { ImageSourcePropType, ImageStyle, Pressable, StyleProp, TextStyle, ViewStyle, Image } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "../ThemeConfig/ThemeConfig";
type ButtonFill = 'solid' | 'outline';
export interface ButtonProps {
  title: string;
  fill?: ButtonFill;
  width?: ViewStyle['width'];
  fullWidth?: boolean;
  height?: number;
  onClick?: () => void;
  color?: string;//solid背景、outline边框与文本
  feedbackEffect?: boolean// 是否开启点击反馈的样式效果
  disabled?: boolean,
  icon?:ImageSourcePropType,
  iconStyle?:StyleProp<ImageStyle>,
  iconPosition?:'left'|'right'
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}
export const Button: React.FC<ButtonProps> = React.memo(
  ({
    title,
    fill = 'solid',
    width = 120,
    fullWidth = false,
    height = 36,
    onClick = () => { },
    color,
    disabled = false,
    feedbackEffect = true,
    icon,
    iconStyle,
    iconPosition="right",
    buttonStyle,
    textStyle
  }) => {
    const { theme } = useTheme()
    const defaultColor = theme['$primary-color']
    const actualColor = color || defaultColor;
    const baseButtonStyle = useMemo(() => {
      const isOutline = fill === 'outline';
      const base: ViewStyle = {
        borderRadius: height / 2,
        borderWidth: isOutline ? 1 : 0,
        borderColor: isOutline ? actualColor : 'transparent',
        backgroundColor: isOutline ? 'transparent' : actualColor,
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection:iconPosition==='right'?'row':'row-reverse'
      };
      return base
    }, [width, height, fill, actualColor, fullWidth, disabled, iconPosition]);
    const textColor = fill === 'outline' ? actualColor : '#fff';
    const defaultIconSize = height * 0.5; 
    const iconMargin = iconPosition === 'right' 
      ? { marginLeft: 5 } 
      : { marginRight: 5 };
    const pressableStyle = ({ pressed }: { pressed: boolean }) => [
      baseButtonStyle,
      pressed && feedbackEffect && !disabled && { opacity: 0.85 },
      buttonStyle,
    ]
    return (
      <Pressable style={pressableStyle} onPress={disabled ? undefined : onClick} disabled={disabled} >
        <Text style={[{ color: textColor }, textStyle]}>{title}</Text>
        {icon&&<Image source={icon} style={[{width: defaultIconSize, height: defaultIconSize, ...iconMargin},iconStyle]}></Image>}
      </Pressable>
    );
  }
)

