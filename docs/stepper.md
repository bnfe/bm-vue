## 步进器 Stepper

:::demo 基本

```html
<bm-cell title="默认">
  <bm-stepper slot="description" v-model="stepper6"></bm-stepper>
</bm-cell>
<bm-cell title="小号">
  <bm-stepper slot="description" v-model="stepper1" size="sm"></bm-stepper>
</bm-cell>
<bm-cell title="设置默认值">
  <bm-stepper slot="description" v-model="stepper2" size="sm"></bm-stepper>
</bm-cell>
<bm-cell title="设置上下限">
  <bm-stepper
    slot="description"
    v-model="stepper3"
    :min="-3"
    :max="3"
    size="sm"
  ></bm-stepper>
</bm-cell>
<bm-cell title="设置步长">
  <bm-stepper
    slot="description"
    v-model="stepper4"
    :step="0.5"
    size="sm"
  ></bm-stepper>
</bm-cell>
<bm-cell title="禁用状态">
  <bm-stepper
    slot="description"
    v-model="stepper5"
    disabled
    size="sm"
  ></bm-stepper>
</bm-cell>
```

:::

:::demo 多形状

```html
<bm-cell title="圆角">
  <bm-stepper
    slot="description"
    v-model="stepper7"
    shape="radius"
    size="sm"
  ></bm-stepper>
</bm-cell>
<bm-cell title="圆型">
  <bm-stepper
    slot="description"
    v-model="stepper8"
    shape="circle"
    size="sm"
  ></bm-stepper>
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      stepper1: 0,
      stepper2: 2,
      stepper3: 0,
      stepper4: 0,
      stepper5: 0,
      stepper6: 0,
      stepper7: 0,
      stepper8: 0,
      stepper9: 0,
      stepper10: 0,
    }
  },
  methods: {
    handleChange(event) {
      console.log(event);
    },
    handleInputChange(v) {
      console.log(v);
    }
  },
};
</script>
```

### API

#### Stepper Attributes

| 属性      | 类型   | 默认值     | 可选值／参数       | 说明                    |
| :-------- | :----- | :--------- | :----------------- | :---------------------- |
| size      | string | 'md'       | 'md', 'sm'         | 主题                    |
| shape     | string |            | 'radius', 'circle' | 形状                    |
| v-model   | number |            |                    | 绑定值                  |
| disabled  | boolean   | false      |                    | 是否禁用                |
| min       | number |            |                    | 最小值                  |
| max       | number |            |                    | 最大值                  |
| step      | number | 1          |                    | 步长                    |

#### Stepper Events

| 事件名称    | 说明                   | 回调参数       |
| :---------- | :--------------------- | :------------- |
| change      | 点击加减后触发的事件   | event 事件对象 |
| input-change | 点击加减后返回变化的值 | number         |
