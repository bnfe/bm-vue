## 进度条 Progress

:::demo 基本

```html
<div class="progress" style="padding:20px 0;">
  <bm-progress
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    {{percent + '%'}}
  </bm-progress>
</div>
<div class="progress">
  <bm-progress
    type="circle"
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    <div class="progress-content">
      <span class="progress-text">{{percent}}</span
      ><span class="progress-percent">%</span>
    </div>
  </bm-progress>
</div>
<div class="progress">
  <bm-progress
    type="semi-circle"
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    <div class="progress-content">
      <span class="progress-text">{{percent}}</span
      ><span class="progress-percent">%</span>
    </div>
  </bm-progress>
</div>

<bm-cell title="进度">
  <bm-stepper
    shape="radius"
    :step="10"
    :min="0"
    :max="100"
    v-model="percent"
    @step-change="handleStepChange"
  />
</bm-cell>
<bm-cell title="主题">
  <bm-select :defaultValue="theme" :data-source="dataSource" @ok="handleOk" />
</bm-cell>
<bm-cell title="线条形状">
  <bm-select
    :defaultValue="shape"
    :data-source="shapeSource"
    @ok="handleShape"
  />
</bm-cell>
<bm-cell title="线条粗细">
  <bm-select
    :defaultValue="weight"
    :data-source="weightSource"
    @ok="handleWeight"
  />
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      percent: 10,
      theme: 'primary',
      shape: 'round',
      weight: 'normal',
      dataSource:[
        { value: 'primary', label: 'primary' },
        { value: 'success', label: 'success' },
        { value: 'warning', label: 'warning' },
        { value: 'error', label: 'error' },
      ],
      shapeSource:[
        { value: 'rect', label: 'rect' },
        { value: 'round', label: 'round' },
      ],
      weightSource:[
        { value: 'normal', label: 'normal' },
        { value: 'thin', label: 'thin' },
      ],
    }
  },
  methods: {
    handleStepChange(e) {

    },
    handleOk(v) {
      this.theme = v.value;
    },
    handleShape(v) {
      this.shape = v.value;
    },
    handleWeight(v) {
      this.weight = v.value;
    },

  },
};
</script>
```

### API

| 属性      | 类型             | 默认值      | 可选值／参数                             | 说明                         |
| :-------- | :--------------- | :---------- | :--------------------------------------- | :--------------------------- |
| theme     | string           | 'primary'   | 'primary', 'success', 'warning', 'error' | 主题                         |
| percent   | number           | 0           |                                          | 进度百分比（范围：0 ～ 100） |
| shape     | string           | 'rect'      | 'rect', 'round'                          | 线条形状                     |
| weight    | string , number | 'normal'    | 'normal', 'thin'                         | 线条粗细                     |
| type      | string           | 'line'      | 'line', 'circle' , 'semi-circle'         | 类型                         |
