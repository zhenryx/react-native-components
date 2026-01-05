# Button 按钮组件

## 简介

Button 是一个功能丰富的按钮组件，支持多种样式、图标、渐变效果等。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 按钮文本（必填） |
| InnerComponent | ComponentType<any> | View | 支持渐变等自定义内部组件 |
| linearGradientProps | Record<string, any> | - | 渐变组件属性 |
| fill | 'solid' \| 'outline' | 'solid' | 填充模式：实心或描边 |
| width | ViewStyle['width'] | 120 | 按钮宽度 |
| fullWidth | boolean | false | 是否全宽 |
| height | number | 36 | 按钮高度 |
| onPress | () => void | - | 点击事件 |
| color | string | - | 颜色（solid背景、outline边框与文本） |
| feedbackEffect | boolean | true | 是否开启点击反馈效果 |
| disabled | boolean | false | 是否禁用 |
| icon | ImageSourcePropType | - | 图标 |
| iconStyle | StyleProp<ImageStyle> | - | 图标样式 |
| iconPosition | 'left' \| 'right' | 'right' | 图标位置 |
| buttonStyle | StyleProp<ViewStyle> | - | 按钮容器样式 |
| textStyle | StyleProp<TextStyle> | - | 文本样式 |

## 使用示例

```tsx
import { Button } from 'react-native-components';

<Button 
  title="点击我" 
  onPress={() => console.log('clicked')}
  fill="solid"
  color="#e25829ff"
/>
```

