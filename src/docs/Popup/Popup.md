# Popup

弹出层是一个用于显示临时内容的组件，支持从底部、顶部或中间弹出，带有流畅的动画效果。

## Usage

### Import

```tsx
import { Popup } from '@zhenryx/react-native-components';
```

## Position

弹出层支持三种位置：底部、中间和顶部。

```tsx
<Popup 
  visible={visible}
  position="bottom"
  onClose={() => setVisible(false)}
>
  <Text>底部弹出</Text>
</Popup>

<Popup 
  visible={visible}
  position="center"
  onClose={() => setVisible(false)}
>
  <Text>中间弹出</Text>
</Popup>

<Popup 
  visible={visible}
  position="top"
  onClose={() => setVisible(false)}
>
  <Text>顶部弹出</Text>
</Popup>
```

## Size

可以通过 `height` 和 `width` 属性控制弹出层的尺寸。

```tsx
<Popup 
  visible={visible}
  position="bottom"
  height={400}
  onClose={() => setVisible(false)}
>
  <Text>自定义高度</Text>
</Popup>

<Popup 
  visible={visible}
  position="center"
  width={300}
  onClose={() => setVisible(false)}
>
  <Text>自定义宽度</Text>
</Popup>
```

## Round

可以通过 `round` 属性设置圆角样式。

```tsx
<Popup 
  visible={visible}
  position="bottom"
  round={true}
  onClose={() => setVisible(false)}
>
  <Text>圆角弹出层</Text>
</Popup>
```

## Closeable

可以通过 `closeable` 属性显示关闭按钮。

```tsx
<Popup 
  visible={visible}
  closeable={true}
  onClose={() => setVisible(false)}
>
  <Text>带关闭按钮的弹出层</Text>
</Popup>
```

