# Text 文本组件

## 简介

Text 是一个自定义文本组件，自动修复老安卓机型字体宽度测量不准确导致文本被截断的问题。

## Props

Text 组件继承 React Native 的 TextProps，所有原生 Text 组件的属性都可以使用。

## 使用示例

```tsx
import { Text } from 'react-native-components';

<Text style={{ fontSize: 16, color: '#333' }}>
  这是一段文本
</Text>
```

## 注意事项

- 该组件主要解决了 Android 平台上的文本截断问题
- 在 Android 上会自动应用 Roboto 字体以确保文本测量准确

