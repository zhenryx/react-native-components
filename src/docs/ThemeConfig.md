# ThemeConfig 主题配置

## 简介

ThemeConfig 提供了主题配置功能，支持全局主题管理和自定义主题。

## 组件

### ThemeProvider

主题提供者，需要在应用根部包裹。

### useTheme

获取主题的 Hook。

## 使用示例

```tsx
import { ThemeProvider, useTheme } from 'react-native-components';

// 在应用根部
function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

// 在组件中使用
function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme['$primary-color'] }}>
      <Text>使用主题颜色</Text>
    </View>
  );
}
```

## 主题配置项

主题对象支持以下配置项（可根据需要扩展）：

- `$primary-color`: 主色
- `$button-border-radius`: 按钮圆角
- `$popup-border-radius`: 弹出层圆角
- `$popup-height`: 弹出层高度
- `$header-height`: 头部高度
- `$header-background`: 头部背景色
- `$overlay-bg-color`: 遮罩背景色
- 等等...

