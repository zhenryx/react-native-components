# Popup 弹出层组件

## 简介

Popup 是一个弹出层组件，支持从底部、顶部、中间弹出，带有动画效果。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| visible | boolean | false | 是否显示 |
| position | 'bottom' \| 'center' \| 'top' | 'center' | 弹出位置 |
| height | number | - | 高度（position 为 bottom/top 时使用） |
| width | number \| string | - | 宽度（position 为 center 时默认 300） |
| round | boolean | false | 是否圆角 |
| closeable | boolean | false | 是否显示关闭按钮 |
| closeOnOverlayPress | boolean | false | 点击遮罩是否关闭 |
| overlayStyle | StyleProp<ViewStyle> | - | 遮罩样式 |
| style | StyleProp<ViewStyle> | - | 弹出层样式 |
| children | React.ReactNode | - | 内容 |
| onClose | () => void | - | 关闭回调（必填） |

## 使用示例

```tsx
import { Popup } from 'react-native-components';

<Popup 
  visible={visible}
  position="bottom"
  height={400}
  round={true}
  closeable={true}
  onClose={() => setVisible(false)}
>
  <View>
    <Text>弹出内容</Text>
  </View>
</Popup>
```

