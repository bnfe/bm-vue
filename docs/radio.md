## 单选框 Radio

:::demo 普通

```html
<bm-cell>
  <bm-radio @change="handleChange">默认</bm-radio>
</bm-cell>
<bm-cell>
  <bm-radio checked @change="handleChange">默认选中</bm-radio>
</bm-cell>
<bm-cell>
  <bm-radio disabled>禁用</bm-radio>
</bm-cell>
<bm-cell>
  <bm-radio checked disabled>选中且禁用</bm-radio>
</bm-cell>
```

:::

:::demo 按钮样式

```html
<bm-cell>
  <bm-radio-group
    slot="description"
    v-model="radioGroup1"
    @change="handleGroupChange"
    type="button"
  >
    <bm-radio v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
  Button
</bm-cell>
<bm-cell>
  <bm-radio-group
    slot="description"
    v-model="radioGroup2"
    @change="handleGroupChange"
    type="button"
  >
    <bm-radio v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
  指定默认值
</bm-cell>
<bm-cell>
  <bm-radio-group
    slot="description"
    v-model="radioGroup3"
    @change="handleGroupChange"
    type="button"
  >
    <bm-radio
      v-for="(city, index) in cities"
      :value="city"
      :key="city"
      :disabled="index === 1"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
  禁用指定项
</bm-cell>
<bm-cell>
  <bm-radio-group
    slot="description"
    v-model="radioGroup4"
    @change="handleGroupChange"
    shape="rect"
    type="button"
  >
    <bm-radio v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
  直角
</bm-cell>
<bm-cell>
  <bm-radio-group
    slot="description"
    v-model="radioGroup5"
    @change="handleGroupChange"
    shape="round"
    type="button"
  >
    <bm-radio v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
  椭圆角
</bm-cell>
```

:::

:::demo 块级样式

```html
<div style="padding:10px;">
  <bm-radio-group
    block
    compact
    shape="radius"
    type="button"
    v-model="radioGroup6"
    @change="handleGroupChange"
  >
    <bm-radio v-for="(city, index) in cities" :value="city" :key="city"
      >{{city}}</bm-radio
    >
  </bm-radio-group>
</div>
```

:::

:::demo 列表样式

```html
<bm-radio-group type="cell" v-model="radioGroup7" @change="handleGroupChange">
  <bm-radio
    v-for="(city, index) in num"
    :value="city"
    :key="city"
    :disabled="index === 1"
    >{{city + (index === 1 ? ' disabled' : '')}}</bm-radio
  >
</bm-radio-group>
```

:::

:::demo 列表样式禁用状态

```html
<bm-radio-group
  type="cell"
  v-model="radioGroup8"
  @change="handleGroupChange"
  disabled
>
  <bm-radio v-for="(city, index) in num" :value="city" :key="city"
    >{{city}}</bm-radio
  >
</bm-radio-group>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      v1: false,
      city: null,
      index: null,
      cities: ['上海', '北京', '广州', '深圳'],
      num: ['选项一', '选项二', '选项三', '选项四'],
      radioGroup1: '',
      radioGroup2: '上海',
      radioGroup3: '',
      radioGroup4: '',
      radioGroup5: '',
      radioGroup6: '',
      radioGroup7: '',
      radioGroup8: '',
      radioGroup9: '上海',
    };
  },
  methods: {
    handleChange(v, e) {
      console.log(v, e);
    },
    handleGroupChange(v, e) {
      console.log(v, e);
    }
  },
};
</script>
```

### API

#### Radio Group Attributes

| 属性      | 类型   | 默认值   | 可选值／参数              | 说明                       |
| :-------- | :----- | :------- | :------------------------ | :------------------------- |
| v-model   | string |          |                           | 绑定选中值 |
| type      | string |          | 'button', 'cell'          | 显示类型                   |
| shape     | string | 'radius' | 'rect', 'radius', 'round' | 形状                       |
| block     | boolean   | false    |                           | 是否为块级元素             |
| disabled  | boolean   | false    |                           | 是否禁用                   |
| compact   | boolean   | false    |                           | 是否启用紧凑模式           |

#### Radio Attributes

| 属性      | 类型          | 默认值   | 可选值／参数              | 说明           |
| :-------- | :------------ | :------- | :------------------------ | :------------- |
| type      | string        |          | 'button', 'cell'          | 显示类型       |
| shape     | string        | 'radius' | 'rect', 'radius', 'round' | 形状           |
| block     | boolean          | false    |                           | 是否为块级元素 |
| value     | string,number |          |                           | 选项值         |
| checked   | boolean          |          |                           | 是否选中       |
| disabled  | boolean          | false    |                           | 是否禁用       |

#### Radio Events

| 事件名称 | 说明             | 回调参数                     |
| :------- | :--------------- | :--------------------------- |
| change   | 选择后触发的事件 | value 选中 radio 的 label 值 |

#### Radio Group Events

| 事件名称 | 说明             | 回调参数                     |
| :------- | :--------------- | :--------------------------- |
| change   | 选择后触发的事件 | value 选中 radio 的 label 值 |
