# Header

头部导航组件用于显示页面标题和导航操作，支持自定义左右侧内容，自动适配安全区域。

## Usage

### Import

```tsx
import { Header } from '@zhenryx/react-native-components';
```

## Basic

基本用法，显示标题和返回按钮。

```tsx
<Header 
  title="我的页面"
  onBack={() => navigation.goBack()}
/>
```

## Custom Components

可以通过 `leftComponent`、`centerComponent` 和 `rightComponent` 自定义各部分内容。

```tsx
<Header 
  leftComponent={<Text>左侧</Text>}
  centerComponent={<Text>中间</Text>}
  rightComponent={<Button title="设置" />}
/>
```

## Hide Back Button

可以通过 `showBack` 属性隐藏返回按钮。

```tsx
<Header 
  title="首页"
  showBack={false}
/>
```

## Background Color

可以通过 `backGroundColor` 属性设置背景颜色。

```tsx
<Header 
  title="我的页面"
  backGroundColor="#007AFF"
  onBack={() => navigation.goBack()}
/>
```

## Custom Styles

可以通过 `containerStyle` 和 `titleStyle` 自定义样式。

```tsx
<Header 
  title="自定义样式"
  containerStyle={{ backgroundColor: '#f5f5f5' }}
  titleStyle={{ color: '#333', fontSize: 20 }}
  onBack={() => navigation.goBack()}
/>
```

