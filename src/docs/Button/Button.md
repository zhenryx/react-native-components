# Button

按钮是可触摸的元素，用于与屏幕交互和执行操作。它们可以显示文本、图标或两者兼有。按钮可以通过多个属性进行样式设置，以呈现特定的外观。

## Usage

### Import

```tsx
import { Button } from '@zhenryx/react-native-components';
```

## Fill

按钮有实心按钮和描边按钮两种类型。

```tsx
<Button title="实心" />
<Button title="描边" fill="outline" />
```

## Size

按钮的高度可以通过 `height` 属性进行设置，默认高度为 36。

```tsx
<Button title="小按钮" height={28} />
<Button title="默认" height={36} />
<Button title="大按钮" height={44} />
```

## Colors

可以通过 `color` 属性自定义按钮颜色。

```tsx
<Button title="主色" color="#007AFF" />
<Button title="成功" color="#34C759" />
<Button title="警告" color="#FF9500" />
<Button title="危险" color="#FF3B30" />
```

## Disabled

可以通过 `disabled` 属性禁用按钮。

```tsx
<Button title="禁用按钮" disabled={true} />
```

## Icon Button

可以通过 `icon` 属性添加图标，并通过 `iconPosition` 控制图标位置。

```tsx
<Button 
  title="左侧图标"
  icon={require('./icon.png')}
  iconPosition="left"
/>

<Button 
  title="右侧图标"
  icon={require('./icon.png')}
  iconPosition="right"
/>
```

## Linear Gradient

可以通过 `InnerComponent` 和 `linearGradientProps` 属性使用渐变效果（需要安装 react-native-linear-gradient）。

```tsx
import LinearGradient from 'react-native-linear-gradient';

<Button 
  title="渐变按钮"
  InnerComponent={LinearGradient}
  linearGradientProps={{
    colors: ['#FF6B6B', '#4ECDC4'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  }}
/>
```

## Full Width

可以通过 `fullWidth` 属性设置按钮为全宽。

```tsx
<Button title="全宽按钮" fullWidth={true} />
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 按钮文本（必填） |
| fill | 'solid' \| 'outline' | 'solid' | 填充模式：实心或描边 |
| height | number | 36 | 按钮高度 |
| width | ViewStyle['width'] | 120 | 按钮宽度 |
| fullWidth | boolean | false | 是否全宽 |
| color | string | - | 颜色（solid 背景、outline 边框与文本） |
| disabled | boolean | false | 是否禁用 |
| feedbackEffect | boolean | true | 是否开启点击反馈效果 |
| onPress | () => void | - | 点击事件 |
| icon | ImageSourcePropType | - | 图标 |
| iconPosition | 'left' \| 'right' | 'right' | 图标位置 |
| iconStyle | StyleProp<ImageStyle> | - | 图标样式 |
| InnerComponent | ComponentType<any> | View | 支持渐变等自定义内部组件 |
| linearGradientProps | Record<string, any> | - | 渐变组件属性 |
| buttonStyle | StyleProp<ViewStyle> | - | 按钮容器样式 |
| textStyle | StyleProp<TextStyle> | - | 文本样式 |
