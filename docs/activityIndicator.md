## 活动指示器 ActivityIndicator

:::demo 基本

```html
<bm-cell>
  <bm-activity-indicator
    slot="description"
    class="rotate360"
  ></bm-activity-indicator>
  普通
</bm-cell>
<bm-cell>
  <bm-activity-indicator
    slot="description"
    class="rotate360"
    theme="error"
  ></bm-activity-indicator>
  主题
</bm-cell>
<bm-cell>
  <bm-activity-indicator
    slot="description"
    class="rotate360"
    size="lg"
  ></bm-activity-indicator>
  大号
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
    }
  }
};
</script>
```

### API

| 属性      | 类型   | 默认值                | 可选值／参数                                                | 说明     |
| :-------- | :----- | :-------------------- | :---------------------------------------------------------- | :------- |
| theme     | string | 'primary'             | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题     |
| size      | string |                       | 'lg'                                                        | 大小     |
