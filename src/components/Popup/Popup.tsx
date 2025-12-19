import React, {
  useRef,
  useEffect,
  useMemo,
  useState
} from "react";
import { OverLay } from "../Overlay/Overlay";
import {
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  Image,
  Pressable,
} from "react-native";
import { useTheme } from "../ThemeConfig/ThemeConfig";
export interface PopupProps {
  useModal?: boolean;
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

const ANIMATION_DURATION = 250;

export const Popup: React.FC<PopupProps> = (props) => {
  const {
    useModal = true,
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
  } = props;

  const { theme } = useTheme();
  const radius = theme['$popup-border-radius'] ?? 10;
  const minHeight = theme['$popup-height'] ?? 100;
  const closeIconWidth = theme['$popup-closeicon-width'] ?? 12;
  const closeIconHeight = theme['$popup-closeicon-height'] ?? 12;
  const centerPopRadius = theme['$popup-center-border-radius'] || 10;

  const animatedValue = useRef(new Animated.Value(0)).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null);
  const [realVisible, setRealVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      setRealVisible(true);
    }
    if (fadeInstance.current) {
      fadeInstance.current.stop();
    }
    fadeInstance.current = Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: ANIMATION_DURATION,
      easing: visible ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic),
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
  const baseStyle = useMemo<ViewStyle>(() => {
    const base: ViewStyle = {
      backgroundColor: '#fff',
      ...(height ? { height } : { minHeight }),
      width: position === 'center' ? width ?? 300 : '100%',
    };

    if (position !== 'center') {
      base.position = 'absolute';
      base.left = 0;
      base.right = 0;
      if (position === 'bottom') {
        base.bottom = 0;
      } else {
        base.top = 0;
      }
    }

    if (round) {
      if (position === 'center') {
        base.borderRadius = centerPopRadius;
      } else if (position === 'bottom') {
        base.borderTopLeftRadius = radius;
        base.borderTopRightRadius = radius;
      } else {
        base.borderBottomLeftRadius = radius;
        base.borderBottomRightRadius = radius;
      }
    }

    return base;
  }, [position, width, height, minHeight, round, radius, centerPopRadius]);

  const animatedStyle = useMemo(() => {
    if (position === 'center') {
      return {
        opacity: animatedValue,
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1],
            }),
          },
        ],
      };
    }

    const distance = height || minHeight;
    return {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: position === 'bottom' ? [distance, 0] : [-distance, 0],
          }),
        },
      ],
    };
  }, [position, animatedValue, height, minHeight]);

  const closeIconStyle = useMemo(
    () => ({
      width: closeIconWidth,
      height: closeIconHeight,
    }),
    [closeIconWidth, closeIconHeight]
  );

  const closeButtonPressableStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      right: 10,
      [position === 'top' ? 'bottom' : 'top']: 10,
      zIndex: 999,
    }),
    [position]
  );

  if (!realVisible) {
    return null;
  }

  return (
    <OverLay
      useModal={useModal}
      visible={realVisible}
      overlayStyle={overlayStyle}
      onOverlayPress={closeOnOverlayPress ? onClose : undefined}
    >
      <Animated.View style={[baseStyle, animatedStyle, style]}>
        {children}
        {closeable && (
          <Pressable
            hitSlop={15}
            onPress={onClose}
            style={closeButtonPressableStyle}
          >
            <Image
              source={require('./assets/icon-close.png')}
              style={closeIconStyle}
            />
          </Pressable>
        )}
      </Animated.View>
    </OverLay>
  );
};
Popup.displayName = 'Popup';