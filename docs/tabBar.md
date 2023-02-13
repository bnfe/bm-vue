## 标签拦 TabBar

:::demo 基本用法

```html
<bm-cell title="隐藏 | 展示">
  <bm-button slot="description" ghost @click="toggle">{{ visible ? '隐藏' : '展示'}}</bm-button>
</bm-cell>
<bm-tab-bar :visible="visible" :defaultActiveKey="1" @change="handleChange">
  <bm-tab-bar-item :item-key="1" title="首页">
      <bm-icon slot="icon" tag="symbol" type="home" class="icon"></bm-icon>
      <bm-icon slot="activeIcon" tag="symbol" theme="primary" type="home" class="icon"></bm-icon>
  </bm-tab-bar-item>
  <bm-tab-bar-item :item-key="2" title="保险">
      <bm-badge slot="icon" sup shape="circle" text="3">
        <bm-icon tag="symbol" type="insurance" class="icon"></bm-icon>
      </bm-badge>
      <bm-badge slot="activeIcon" sup shape="circle" text="3">
        <bm-icon tag="symbol" theme="primary" type="insurance" class="icon"></bm-icon>
      </bm-badge>
  </bm-tab-bar-item>
  <bm-tab-bar-item :item-key="3" title="用户">
      <bm-icon slot="icon" tag="symbol" type="user" class="icon"></bm-icon>
      <bm-icon slot="activeIcon" tag="symbol" theme="primary" type="user" class="icon"></bm-icon>
  </bm-tab-bar-item>
</bm-tab-bar>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      activeKey: 1,
      visible: true,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    handleChange(value) {
      alert(value);
    },
  },
};
</script>
```

### API


#### TabBar

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| v-model | number \| string | - | 当前选中项 |
| defaultActiveKey | number \| string | - | 初始选中项, 默认第一个选中 |
| visible | boolean | `true` | 是否显示 |


#### TabBarItem

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| itemKey | number \| string | - | 唯一标识，对应`activeKey` |
| title |  | - | 标题文字 |
| icon | slot | - | 图标 |
| activeIcon | slot | - | 选中时图标 |


#### TabBar Events

| 事件名称     | 说明                 | 回调参数                                       |
| :----------- | :------------------- | :--------------------------------------------- |
| change   | 点击`tabbarItem`触发的选中事件 | 值变化时触发的回调函数 |
