# Dialog 对话框组件

## 简介

Dialog 是一个对话框组件，支持提示和确认两种类型。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| visible | boolean | false | 是否显示 |
| type | 'alert' \| 'confirm' | 'alert' | 对话框类型 |
| title | string | '提示' | 标题 |
| content | string | - | 内容文本 |
| titleStyle | TextStyle | - | 标题样式 |
| contentStyle | TextStyle | - | 内容样式 |
| closeOnOverlayPress | boolean | false | 点击遮罩是否关闭 |
| round | boolean | false | 是否圆角 |
| confirmText | string | '确认' | 确认按钮文本 |
| cancelText | string | '取消' | 取消按钮文本 |
| onConfirm | () => void | - | 确认回调 |
| onCancel | () => void | - | 取消回调 |
| children | React.ReactNode | - | 自定义内容 |

## 使用示例

```tsx
import { Dialog } from 'react-native-components';

<Dialog 
  visible={visible}
  type="confirm"
  title="提示"
  content="确定要删除吗？"
  onConfirm={() => console.log('确认')}
  onCancel={() => console.log('取消')}
/>
```

