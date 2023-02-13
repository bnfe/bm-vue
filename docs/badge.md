## 徽标 Badge

:::demo 基本

```html
<bm-cell has-arrow title="点状">
  <bm-badge slot="description" shape="dot" @click="handleClick"></bm-badge>
</bm-cell>
<bm-cell has-arrow title="直角">
  <bm-badge slot="description" text="免费"></bm-badge>
</bm-cell>
<bm-cell has-arrow title="圆角">
  <bm-badge slot="description" text="new" shape="radius"></bm-badge>
</bm-cell>
<bm-cell has-arrow title="椭圆">
  <span slot="description">
    <bm-badge text="999+" shape="round"></bm-badge>
  </span>
</bm-cell>
<bm-cell has-arrow title="圆形">
  <span slot="description">
    <bm-badge :text.number="3" shape="circle"></bm-badge>
  </span>
</bm-cell>
<bm-cell has-arrow title="叶形">
  <span slot="description">
    <bm-badge text="新品" shape="leaf"></bm-badge>
  </span>
</bm-cell>
```

:::

:::demo 多主题

```html
<div class="custom-panel">
  <div class="box">
    <bm-badge sup shape="dot" theme="primary"></bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="dot" theme="success"></bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="dot" theme="warning"></bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="dot" theme="error"></bm-badge>
  </div>
  <div class="box">
    <bm-badge shape="round" text="999+" theme="primary"></bm-badge>
  </div>
  <div class="box">
    <bm-badge shape="round" text="999+" theme="success"></bm-badge>
  </div>
  <div class="box">
    <bm-badge shape="round" text="999+" theme="warning"></bm-badge>
  </div>
  <div class="box">
    <bm-badge shape="round" text="999+" theme="error"></bm-badge>
  </div>
</div>
```

:::

::: demo 上标位置

```html
<div class="custom-panel">
  <div class="box">
    <bm-badge sup shape="dot" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="rect" text="免费" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="radius" text="new" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="round" text="999+" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="circle" text="3" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
  <div class="box">
    <bm-badge sup shape="leaf" text="新品" @click="handleClick">
      <div class="box-item"></div>
    </bm-badge>
  </div>
</div>
```

:::

::: demo 文本示例

```html
<div class="text-panel">
  <div class="box">
    <bm-badge sup shape="dot">
      <span class="box-text">邀请有奖</span>
    </bm-badge>
  </div>
  <div class="box">
    <span class="box-text">邀请有奖</span>
    <bm-badge sup shape="dot" />
  </div>
</div>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
    }
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>
```

### API

#### Badge Attributes

| 属性      | 类型           | 默认值   | 可选值／参数                                        | 说明         |
| :-------- | :------------- | :------- | :-------------------------------------------------- | :----------- |
| theme     | string         | 'error'  | 'default', 'primary', 'success', 'warning', 'error' | 主题         |
| shape     | string         |          | 'dot', 'rect', 'radius', 'round', 'circle', 'leaf'  | 形状         |
| text      | string, number |          |                                                     | 显示文字     |
| sup       | boolean           | false    |                                                     | 是否上标位置 |

#### Badge Events

| 事件名称 | 说明               | 回调参数       |
| :------- | :----------------- | :------------- |
| click    | click 时触发的事件 | event 事件对象 |
