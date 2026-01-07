# ThemeConfig

主题配置提供了全局主题管理功能，支持自定义主题并应用到所有组件中。

## Usage

### Import

```tsx
import { ThemeProvider, useTheme } from '@zhenryx/react-native-components';
```

## Setup

在应用根部包裹 `ThemeProvider`。

```tsx
import { ThemeProvider } from '@zhenryx/react-native-components';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Use Theme

在组件中使用 `useTheme` Hook 获取主题。

```tsx
import { useTheme } from '@zhenryx/react-native-components';

function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme['$primary-color'] }}>
      <Text>使用主题颜色</Text>
    </View>
  );
}
```

## Custom Theme

可以通过 `setTheme` 方法动态修改主题。

```tsx
function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  const changeTheme = () => {
    setTheme({
      ...theme,
      '$primary-color': '#007AFF',
    });
  };
  
  return (
    <Button title="切换主题" onPress={changeTheme} />
  );
}
```

## Theme Keys

主题对象支持以下配置项（可根据需要扩展）：

- `$primary-color`: 主色
- `$button-border-radius`: 按钮圆角
- `$popup-border-radius`: 弹出层圆角
- `$popup-height`: 弹出层高度
- `$header-height`: 头部高度
- `$header-background`: 头部背景色
- `$overlay-bg-color`: 遮罩背景色
