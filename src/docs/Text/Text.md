# Text

文本组件是对 React Native 原生 Text 组件的封装，自动修复了部分安卓机型字体宽度测量不准确导致文本被截断的问题。

## Usage

### Import

```tsx
import { Text } from '@zhenryx/react-native-components';
```

## Basic

基本用法，与原生 Text 组件完全兼容。

```tsx
<Text>这是一段文本</Text>
```

## Styling

支持所有原生 Text 组件的样式属性。

```tsx
<Text style={{ fontSize: 16, color: '#333', fontWeight: 'bold' }}>
  带样式的文本
</Text>
```

## Note

该组件主要解决了 Android 平台上的文本截断问题。在 Android 上会自动应用 Roboto 字体以确保文本测量准确，在 iOS 上表现与原生 Text 组件一致。

