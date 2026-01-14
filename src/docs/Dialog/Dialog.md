# Dialog

对话框是一个模态组件，用于向用户显示重要信息或请求确认。它支持提示和确认两种类型。

## Usage

### Import

```tsx
import { Dialog } from '@zhenryx/react-native-components';
```

## Variants

对话框有两种类型：提示框和确认框。

```tsx
<Dialog 
  visible={visible}
  type="alert"
  title="提示"
  content="这是一个提示信息"
  onConfirm={() => setVisible(false)}
/>

<Dialog 
  visible={visible}
  type="confirm"
  title="确认"
  content="确定要执行此操作吗？"
  onConfirm={() => setVisible(false)}
  onCancel={() => setVisible(false)}
/>
```

## Customization

可以通过 `round` 属性设置圆角样式，通过 `closeOnOverlayPress` 控制点击遮罩是否关闭。

```tsx
<Dialog 
  visible={visible}
  round={true}
  closeOnOverlayPress={true}
  title="自定义对话框"
  content="支持圆角和点击遮罩关闭"
  onConfirm={() => setVisible(false)}
/>
```

## Custom Content

可以通过 `children` 属性添加自定义内容。

```tsx
<Dialog 
  visible={visible}
  title="自定义内容"
  onConfirm={() => setVisible(false)}
>
  <View>
    <Text>这里是自定义内容</Text>
  </View>
</Dialog>
```

