# TabView 标签页组件

## 简介

TabView 是一个标签页组件，支持多个标签切换显示不同内容。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| tabs | Tab[] | - | 标签列表（必填） |
| defaultTab | string | - | 默认选中的标签 ID |
| onTabChange | (tabId: string) => void | - | 标签切换回调 |
| renderContent | (tab: Tab) => ReactNode | - | 自定义内容渲染函数 |

## Tab 接口

```typescript
interface Tab {
  id: string;        // 标签 ID（必填）
  label: string;     // 标签文本（必填）
  content?: ReactNode; // 标签内容
}
```

## 使用示例

```tsx
import { TabView, Tab } from 'react-native-components';

const tabs: Tab[] = [
  { id: '1', label: '标签1', content: <Text>内容1</Text> },
  { id: '2', label: '标签2', content: <Text>内容2</Text> },
];

<TabView 
  tabs={tabs}
  defaultTab="1"
  onTabChange={(tabId) => console.log('切换到:', tabId)}
/>
```

