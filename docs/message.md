## 消息 Message

:::demo 基本用法

```html
<bm-message>普通</bm-message>
<bm-message theme="error">自定义主题</bm-message>
<bm-message icon="wrong-round">自定义图标</bm-message>
```

:::

:::demo 可操作

```html
<bm-message hasArrow @click="handleClick">链接样式的</bm-message>
<!-- 也可以不绑定visible -->
<bm-message closable :visible.sync="visible">可关闭的</bm-message>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClick(event) {
      console.log(event);
      alert('click this message!');
    }
  },
};
</script>
```

### API

#### Message Attributes

| 属性      | 类型   | 默认值     | 可选值／参数                             | 说明             |
| :-------- | :----- | :--------- | :--------------------------------------- | :--------------- |
| theme     | string | 'primary'  | 'primary', 'success', 'warning', 'error' | 主题             |
| icon      | string |            |                                          | 设置图标         |
| closable  | boolean   | false      |                                          | 是否显示关闭按钮 |
| has-arrow  | boolean   | false      |                                          | 是否显示箭头     |

#### Message Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
