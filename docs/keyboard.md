## 虚拟键盘 Keyboard & KeyboardPicker

:::demo 平铺键盘 Keyboard

```html
<bm-keyboard type="number"></bm-keyboard>
```

:::

:::demo 键盘触发器 KeyboardPicker

```html
<bm-cell title="拾取器触发">
  <bm-button slot="description" size="xs" @click="visible1 = true"
    >开启</bm-button
  >
</bm-cell>
<bm-keyboard-picker
  :visible.sync="visible1"
  type="number"
  @keyClick="handleChange1"
></bm-keyboard-picker>
```

:::

### Vue Script

```javascript
<script name="vue">
const getValue = (v, key) => {
  if (key == 'delete') {
    return v.slice(0, -1)
  }
  return `${v}${key}`
}
export default {
  data() {
    return {
      visible1: false,
    }
  },
  methods: {
    handleChange1(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v1 = getValue(this.v1, key)
      console.log(this.v1);
    },
  },
};
</script>
```

### API

#### keyboard Attributes

| 属性      | 类型   | 默认值      | 可选值／参数 | 说明                                    |
| :-------- | :----- | :---------- | :----------- | :-------------------------------------- |
| type      | string | 'number'    |              | 键盘类型，可选`number`,`price`,`idcard` |

#### keyboardPicker Attributes

| 属性    | 类型   | 默认值   | 可选值／参数 | 说明                                    |
| :------ | :----- | :------- | :----------- | :-------------------------------------- |
| visible | boolean   | false    |              | 是否显示, 支持.sync 修饰符 (v2.3.0+)    |
| type    | string | 'number' |              | 键盘类型，可选`number`,`price`,`idcard` |

#### keyboard & keyboardPicker Events

| 事件名称 | 说明                   | 回调参数     |
| :------- | :--------------------- | :----------- |
| key-click | 当点击键盘时触发的事件 | 最新点击的值 |
