# TabView

标签页组件用于在多个内容视图之间切换，支持水平滚动的标签栏和自定义内容渲染。

## Usage

### Import

```tsx
import { TabView, Tab } from '@zhenryx/react-native-components';
```

## Basic

基本用法，使用 `content` 属性定义标签内容。

```tsx
const tabs: Tab[] = [
  { id: '1', label: '标签1', content: <Text>内容1</Text> },
  { id: '2', label: '标签2', content: <Text>内容2</Text> },
  { id: '3', label: '标签3', content: <Text>内容3</Text> },
];

<TabView tabs={tabs} />
```

## Default Tab

可以通过 `defaultTab` 属性设置默认选中的标签。

```tsx
<TabView 
  tabs={tabs}
  defaultTab="2"
/>
```

## Custom Render

可以通过 `renderContent` 属性自定义内容渲染方式。

```tsx
<TabView 
  tabs={tabs}
  renderContent={(tab) => (
    <View>
      <Text>自定义渲染: {tab.label}</Text>
    </View>
  )}
/>
```

## Tab Change

可以通过 `onTabChange` 回调监听标签切换。

```tsx
<TabView 
  tabs={tabs}
  onTabChange={(tabId) => {
    console.log('切换到:', tabId);
  }}
/>
```
