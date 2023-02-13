## 文本框 Input

:::demo 普通

```html
<bm-cell title="单行文本">
  <bm-input
    ref="inputFirst"
    v-model="v1"
    type="text"
    placeholder="type is text"
    @change="handleChange"
    :clearable="true"
  ></bm-input>
</bm-cell>
<bm-cell title="多行文本">
  <bm-input
    v-model="v2"
    type="textarea"
    placeholder="type is textarea"
    @change="handleChange2"
    :clearable="true"
  ></bm-input>
</bm-cell>
<bm-cell>
  <bm-button size="xs" theme="primary" @click="focus"
    >click to focus the first input</bm-button
  >
</bm-cell>
```

:::

:::demo 输入类型

```html
<bm-cell title="数字">
  <bm-input-number
    v-model="v5"
    type="number"
    placeholder="type is number"
    @change="handleChange"
  ></bm-input-number>
</bm-cell>
<bm-cell title="金额">
  <bm-input-number
    v-model="v6"
    type="price"
    placeholder="type is price"
    @change="handleChange"
  ></bm-input-number>
</bm-cell>
<bm-cell title="证件号">
  <bm-input-number
    v-model="v7"
    placeholder="type is idcard"
    type="idcard"
    @change="handleChange"
  ></bm-input-number>
</bm-cell>
```

:::

:::demo 只读 / 禁用状态

```html
<bm-cell title="单行文本">
  <bm-input v-model="v8" type="text" readonly></bm-input>
</bm-cell>
<bm-cell title="单行文本">
  <bm-input v-model="v9" disabled></bm-input>
</bm-cell>
<bm-cell title="多行文本">
  <bm-input v-model="v8" rows="4" type="textarea" readonly></bm-input>
</bm-cell>
<bm-cell title="多行文本">
  <bm-input v-model="v9" rows="4" type="textarea" disabled></bm-input>
</bm-cell>
<bm-cell title="数字类型">
  <bm-input-number
    v-model="v5"
    disabled
    type="number"
    placeholder="type is number"
    @change="handleChange"
  ></bm-input-number>
</bm-cell>
```

:::

:::demo 高度自适应

```html
<bm-cell title="多行文本">
  <bm-input
    auto-height
    v-model="v3"
    type="textarea"
    placeholder="this is a auto-height textarea"
  ></bm-input>
</bm-cell>
```

:::

:::demo 无标签栏

```html
<bm-cell>
  <bm-input type="text" placeholder="标题" @change="handleChange3" />
</bm-cell>
<bm-cell>
  <bm-input
    auto-height
    v-model="v4"
    type="textarea"
    rows="4"
    placeholder="摘要"
  ></bm-input>
</bm-cell>
```

:::

:::demo 显示输入字数

```html
<bm-cell>
  <bm-input
    auto-height
    show-length
    type="textarea"
    rows="4"
    max-length="200"
    placeholder="摘要"
    v-model="v5"
  ></bm-input>
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      v1:'',
      v2:'这是一个textarea',
      v3:'',
      v4:'',
      v5:'',
      v6:'',
      v7:'',
      v8:'我是只读状态',
      v9:'我是禁用状态'
    }
  },
  methods: {
    handleChange(v) {
      console.log(this.v1, v);
    },
    handleChange2(v) {
      console.log(this.v2, v);
    },
    handleChange3(v) {
      console.log(v);
    },
    focus() {
      this.$refs.inputFirst.focus()
    },
  },
};
</script>
```

### API

#### Input Attributes

| 属性        | 类型           | 默认值 | 可选值／参数 | 说明                 |
| :---------- | :------------- | :----- | :----------- | :------------------- |
| type        | string         | text   |              | 显示类型             |
| v-model     | string         |        |              | 绑定值               |
| disabled    | boolean        | false  |              | 是否禁用             |
| readonly    | boolean        | false  |              | 是否只读             |
| rows        | string, number |        |              | 多行文本时的显示行数 |
| auto-height | boolean        | false  |              | 是否高度自适应       |
| show-length | boolean        | false  |              | 是否显示输入字数     |

#### Input Events

| 事件名称 | 说明                     | 回调参数 |
| :------- | :----------------------- | :------- |
| change   | 当绑定值变化时触发的事件 | 最新的值 |
