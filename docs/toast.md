## 轻提示 Toast

:::demo 提示信息

```html
<bm-cell>
  <bm-button size="xs" theme="error" slot="description" @click="visible1 = true"
    >开启</bm-button
  >
  错误提示
</bm-cell>
<bm-cell>
  <bm-button
    size="xs"
    theme="success"
    slot="description"
    @click="visible2 = true"
    >开启</bm-button
  >
  成功提示
</bm-cell>
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible3 = true"
    >开启</bm-button
  >
  指定关闭时间
</bm-cell>
<bm-toast :visible.sync="visible1" @close="toastClose"
  >默认3秒自动关闭</bm-toast
>
<bm-toast
  :visible.sync="visible2"
  @close="toastClose"
  @maskClick="visible2 = false"
>
  <div class="box">
    <bm-icon type="right-round-fill" class="box-icon"></bm-icon>
    <div class="box-text">预约成功</div>
  </div>
</bm-toast>
<bm-toast :visible.sync="visible3" @close="toastClose" :duration="10000"
  >指定10秒自动关闭</bm-toast
>
```

:::

:::demo 加载中

```html
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible4 = true"
    >开启</bm-button
  >
  Loading
</bm-cell>
<bm-loading :visible.sync="visible4"></bm-loading>
```

:::

`bm-vue 为 Vue.prototype 上添加了全局方法：$bmToast 因此在 vue instance 内可以采用 this.$bmToast(messgae, options) 或 this.$bmToast(options) 的方式调用`。

#### 普通

```html
<script>
  export default {
    methods: {
      show() {
        this.$bmToast('this is toast')
      }
    }
  }
</script>
```

#### 指定停留时间

```html
<script>
  export default {
    methods: {
      show() {
        this.$bmToast('toast last for 5 sec', {
          duration: 5000
        })
      }
    }
  }
</script>
```

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      isLoading: false
    }
  },
  methods: {
    toastClose(reason, event){
      console.log(reason, event);
    }
  },
};
</script>
```

### API

#### Toast Attributes

| 属性                 | 类型   | 默认值   | 可选值／参数 | 说明                                 |
| :------------------- | :----- | :------- | :----------- | :----------------------------------- |
| visible              | boolean   | false    |              | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| duration             | number | 3000     |              | 自动关闭前停留的时间（单位：毫秒）   |

#### Toast Event

| 事件名称 | 说明             | 回调参数                                                                    |
| :------- | :--------------- | :-------------------------------------------------------------------------- |
| close    | toast 关闭时触发 | 关闭时触发的回调函数 |
| mask-click | 点击遮罩后触发的事件 | event 事件对象 |
