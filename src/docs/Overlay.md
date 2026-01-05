# Overlay 遮罩层组件

## 简介

Overlay 是一个遮罩层组件，通常用于弹窗、对话框等场景的背景遮罩。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| children | React.ReactNode | - | 子组件 |
| visible | boolean | - | 是否显示（必填） |
| overlayStyle | StyleProp<ViewStyle> | - | 遮罩样式 |
| onOverlayPress | () => void | - | 点击遮罩回调 |

## 使用示例

```tsx
import { OverLay } from 'react-native-components';

<OverLay 
  visible={visible}
  onOverlayPress={() => setVisible(false)}
>
  <View>
    <Text>内容</Text>
  </View>
</OverLay>
```

