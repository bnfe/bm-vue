## 面板 Panel

:::demo 普通

```html
<bm-panel>
  <bm-panel-body>
    <bm-cell>body</bm-cell>
  </bm-panel-body>
</bm-panel>
```

:::

:::demo 标题

```html
<bm-panel>
  <bm-panel-header title="标题">
    <a slot="more" @click="handleClick">更多</a>
  </bm-panel-header>
  <bm-panel-body>
    <bm-cell>body</bm-cell>
  </bm-panel-body>
</bm-panel>
```

:::

:::demo 带底部

```html
<bm-panel>
  <bm-panel-body>
    <bm-cell>body</bm-cell>
  </bm-panel-body>
  <bm-panel-footer title="左侧文案" more="右侧文案" />
</bm-panel>
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
    handleClick() {
      alert('click me')
    }
  },
};
</script>
```

### API


#### panel Attributes

| 属性      | 类型   | 默认值   | 可选值／参数 | 说明                |
| :-------- | :----- | :------- | :----------- | :------------------ |
| title     | String |          |              | 标题，也可以用 slot |
| more      | String |          |              | 更多，也可以用 slot |
