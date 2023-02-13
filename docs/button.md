## 按钮 Button

:::demo 基本

```html
<bm-button ghost>default</bm-button>
<bm-button theme="primary">primary</bm-button>
```

:::

:::demo 块级按钮

```html
<bm-button block ghost @click="handleClick">default</bm-button>
<bm-button block ghost disabled @click="handleClick"
  >default disabled</bm-button
>
<bm-button theme="primary" block>primary</bm-button>
<bm-button theme="primary" block disabled>primary disabled</bm-button>
```

:::

:::demo 按钮主题

```html
<bm-button ghost>default</bm-button>
<bm-button theme="primary">primary</bm-button>
<bm-button theme="danger">danger</bm-button>
```

:::

:::demo 按钮大小

```html
<bm-button ghost size="lg">lg</bm-button>
<bm-button ghost>md</bm-button>
<bm-button ghost size="sm">sm</bm-button>
<bm-button ghost size="xs">xs</bm-button>
```

:::

:::demo 按钮形状

```html
<bm-panel-body>
  <bm-button theme="primary">rect</bm-button>
  <bm-button theme="primary" shape="radius">radius</bm-button>
  <bm-button theme="primary" shape="round">round</bm-button>
  <bm-button theme="primary" shape="circle">circle</bm-button>
  <bm-button shape="circle" ghost>
    <bm-icon type="right" slot="icon"></bm-icon>
  </bm-button>
</bm-panel-body>
```

:::

:::demo 带 icon 的按钮

```html
<bm-button ghost shape="radius">
  <bm-icon type="right-round" theme="success" slot="icon"></bm-icon>
  正确
</bm-button>
<bm-button ghost shape="radius">
  <bm-icon type="wrong-round" theme="error" slot="icon"></bm-icon>
  错误
</bm-button>
<bm-button ghost loading shape="radius">
  加载中
</bm-button>
```

:::

:::demo 幽灵按钮

```html
<bm-button block ghost>default ghost</bm-button>
<bm-button theme="primary" block ghost>primary ghost</bm-button>
<bm-button theme="danger" block ghost>danger ghost</bm-button>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  methods: {
    handleClick(n){
      console.log(n);
      alert('点击了我...');
    },
  },
};
</script>
```

### API

#### Button Attributes

| 属性      | 类型   | 默认值    | 可选值／参数                   | 说明           |
| :-------- | :----- | :-------- | :----------------------------- | :------------- |
| theme     | string | 'default' | 'default', 'primary', 'danger' | 主题           |
| size      | string |           | 'xl', 'lg', 'sm', 'xs'         | 大小           |
| shape     | string |           | 'radius', 'round', 'circle'    | 形状           |
| block     | boolean   | false     |                                | 是否为块级元素 |
| ghost     | boolean   | false     |                                | 是否是幽灵按钮 |
| disabled  | boolean   | false     |                                | 是否禁用       |
| loading   | boolean   | false     |                                | 是否显示加载中 |

#### Button Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
