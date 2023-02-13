## 搜索框 SearchBar

:::demo 基本

```html
<bm-search-bar
  :showCancel="false"
  @change="handleChange"
  @submit="handleSubmit"
  @blur="handleBlur"
  @focus="handleFocus"
  @clear="handleClear"
  @cancel="handleCancel"
></bm-search-bar>
```

:::

:::demo 始终展示取消按钮

```html
<bm-search-bar
  shape="round"
  :showCancel="true"
  value="默认搜索关键字"
></bm-search-bar>
```

:::

:::demo 点击获取焦点

```html
<bm-search-bar shape="round" :showCancel="true" ref="searchRef"></bm-search-bar>
<bm-cell>
  <bm-button theme="primary" size="xs" shape="radius" @click="handleClick"
    >点击获取焦点</bm-button
  >
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      value: "",
    }
  },
  methods: {
    handleClick(){
      this.$refs.searchRef.focus();
    },
    handleChange(val){
      this.value = val
    },
    handleSubmit(val){
      console.log(`搜索内容为${val}`);
    },
    handleChange(val){
      console.log(`搜索内容为${val}`);
    },
    handleFocus(){
      console.log('获取焦点');
    },
    handleBlur(){
      console.log('失去焦点');
    },
    handleClear(){
      console.log('点击了清除');
    },
    handleCancel(){
      console.log('点击了取消');
    }
  },
};
</script>
```

### API

#### SearchBar Attributes

| 属性          | 类型           | 默认值 | 可选值／参数 | 说明                   |
| :------------ | :------------- | :----- | :----------- | :--------------------- |
| placeholder   | string         | text   |              | placeholder            |
| disabled      | boolean        | false  |              | 是否禁用               |
| default-value | string         |        |              | 初始值                 |
| value         | string, number |        |              | 搜索关键字             |
| shape         | string         | radius |              | 形状，`round`,`radius` |
| cancel-text   | string         | '取消' |              | 取消文本               |
| show-cancel   | boolean        | false  |              | 是否显示取消操作       |
| clearable     | boolean        | false  |              | 是否可以清除操作       |
| max-length    | number         |        |              | 输入字数上限           |

#### SearchBar Events

| 事件名称 | 说明                               | 回调参数 |
| :------- | :--------------------------------- | :------- |
| change   | 当绑定值变化时触发的事件           | 最新的值 |
| focus    | 当获取焦点时触发的事件             |          |
| blur     | 当失去焦点时触发的事件             |          |
| clear    | 当绑定值被清除时触发的事件         | 最新的值 |
| cancel   | 当取消操作时触发的事件             |          |
| submit   | 当绑定值变化时触发的 Form 搜索事件 | 最新的值 |
