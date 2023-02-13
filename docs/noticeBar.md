## 通告栏 NoticeBar

:::demo 基本用法

```html
<bm-notice-bar>普通</bm-notice-bar>
<bm-notice-bar theme="error">错误色</bm-notice-bar>
<bm-notice-bar icon="wrong-round">自定义图标</bm-notice-bar>
<bm-notice-bar scrollable
  >请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</bm-notice-bar
>
```

:::

:::demo 特定场景

```html
<bm-notice-bar hasArrow @click="handleClick">链接样式的</bm-notice-bar>
<!-- 也可以不绑定visible -->
<bm-notice-bar closable :visible.sync="visible">
  可关闭的
</bm-notice-bar>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    handleClick(){
      alert('click this notice!');
    }
  },
};
</script>
```

### API

#### NoticeBar Attributes

| 属性       | 类型   | 默认值       | 可选值／参数                             | 说明                 |
| :--------- | :----- | :----------- | :--------------------------------------- | :------------------- |
| theme      | string | 'warning'    | 'primary', 'success', 'warning', 'error' | 主题                 |
| icon       | string |              |                                          | 设置图标             |
| scrollable | boolean   | false        |                                          | 是否开启自动滚动轮播 |
| closable   | boolean   | false        |                                          | 是否显示关闭按钮     |
| has-arrow   | boolean   | false        |                                          | 是否显示箭头         |

#### NoticeBar Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
