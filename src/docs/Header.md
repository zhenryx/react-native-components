# Header 头部导航组件

## 简介

Header 是一个自定义头部导航组件，支持左侧返回、中间标题、右侧操作等。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '自定义头部导航' | 标题文本 |
| backGroundColor | string | - | 背景颜色 |
| leftComponent | ReactNode | - | 左侧自定义组件 |
| centerComponent | ReactNode | - | 中间自定义组件 |
| rightComponent | ReactNode | - | 右侧自定义组件 |
| containerStyle | StyleProp<ViewStyle> | - | 容器样式 |
| titleStyle | StyleProp<TextStyle> | - | 标题样式 |
| showBack | boolean | true | 是否显示返回按钮 |
| onBack | () => void | - | 返回回调 |

## 使用示例

```tsx
import { Header } from 'react-native-components';

<Header 
  title="我的页面"
  showBack={true}
  onBack={() => navigation.goBack()}
  rightComponent={<Button title="设置" />}
/>
```

