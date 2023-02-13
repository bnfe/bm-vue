## 开关 Switch

:::demo 基本

```html
<bm-cell>
  <bm-switch slot="description" v-model="switch1" @change="handleChange">
  </bm-switch>
  普通
</bm-cell>
<bm-cell>
  <bm-switch slot="description" defaultChecked></bm-switch>
  默认开
</bm-cell>
<bm-cell>
  <bm-switch slot="description" disabled></bm-switch>
  禁用的开关（默认关）
</bm-cell>
<bm-cell>
  <bm-switch slot="description" disabled defaultChecked></bm-switch>
  禁用的开关（默认开）
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      switch1: false,
    }
  },
  methods: {
    handleChange(checked){
      console.log(checked);
    }
  }
};
</script>
```

### API

#### Switch Attributes

| 属性           | 类型    | 默认值      | 可选值／参数 | 说明     |
| :------------- | :------ | :---------- | :----------- | :------- |
| default-checked | boolean | false       | -            | 初始值   |
| v-model        | boolean | false       | -            | 值       |
| disabled       | boolean | false       | -            | 是否禁用 |

#### Switch Event

| 事件名称 | 说明               | 回调参数             |
| :------- | :----------------- | :------------------- |
| change   | 绑定值改变时的事件 | event.target.checked |
