# Empty

空状态组件用于在列表为空或数据加载失败时向用户展示友好的提示信息。

## Usage

### Import

```tsx
import { Empty } from '@zhenryx/react-native-components';
```

## Basic

基本用法，显示默认的空状态。

```tsx
<Empty />
```

## Custom Description

可以通过 `desc` 属性自定义描述文本。

```tsx
<Empty desc="暂无数据" />
<Empty desc="加载失败，请重试" />
```

## Custom Image

可以通过 `img` 属性自定义图片。

```tsx
<Empty 
  img={require('./custom-empty.png')}
  desc="自定义图片"
/>
```

## Size

可以通过 `width` 和 `height` 属性控制图片尺寸。

```tsx
<Empty 
  width={150}
  height={120}
  desc="大尺寸图片"
/>
```

## Custom Content

可以通过 `children` 属性添加自定义内容，如操作按钮。

```tsx
<Empty desc="暂无数据">
  <Button 
    title="重新加载" 
    onPress={() => reload()}
  />
</Empty>
```

