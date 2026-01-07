# Overlay

遮罩层组件用于在内容上方显示半透明遮罩，通常作为弹窗、对话框等组件的背景层使用。

## Usage

### Import

```tsx
import { OverLay } from '@zhenryx/react-native-components';
```

## Basic

基本用法，显示遮罩层。

```tsx
<OverLay visible={visible}>
  <View>
    <Text>遮罩层内容</Text>
  </View>
</OverLay>
```

## Overlay Press

可以通过 `onOverlayPress` 属性处理点击遮罩的事件。

```tsx
<OverLay 
  visible={visible}
  onOverlayPress={() => setVisible(false)}
>
  <View>
    <Text>点击遮罩关闭</Text>
  </View>
</OverLay>
```

## Custom Style

可以通过 `overlayStyle` 属性自定义遮罩样式。

```tsx
<OverLay 
  visible={visible}
  overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
>
  <View>
    <Text>自定义遮罩颜色</Text>
  </View>
</OverLay>
```
