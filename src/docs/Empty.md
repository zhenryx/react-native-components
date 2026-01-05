# Empty 空状态组件

## 简介

Empty 用于展示空状态，通常用于列表为空时的占位显示。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| children | React.ReactNode | - | 自定义内容 |
| img | ImageSourcePropType | - | 自定义图片（默认使用内置图片） |
| width | number | 120 | 图片宽度 |
| height | number | 100 | 图片高度 |
| desc | string | '数据消失了～' | 描述文本 |
| style | StyleProp<ViewStyle> | - | 容器样式 |
| textStyle | TextStyle | - | 文本样式 |

## 使用示例

```tsx
import { Empty } from 'react-native-components';

<Empty 
  desc="暂无数据"
  width={150}
  height={120}
/>
```

