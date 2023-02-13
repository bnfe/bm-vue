## 加载 Loading

### 基本用法

`bm-vue 为 Vue.prototype 上添加了全局方法：$bmLoading 因此在 vue instance 内可以采用 this.$bmLoading()的方式调用, 方法返回Loading的实例, 调用实例的close方法来关闭loading`。

```html
<bm-button @click="request">click me</bm-button>
<script>
  export default {
    methods: {
      request() {
        const loading = this.$bmLoading()
        setTimeout(() => {
          loading.close()
        }, 3000)
      }
    }
  }
</script>
```

### 使用 v-bm-loading 指令

使用 `v-bm-loading` 指令也可以调用 loading，控制指令的 value 就可以控制 loading。

```html
<div v-bm-loading="loading2">
  <bm-button @click="showload2">click me</bm-button>
</div>
<script>
  export default {
    data() {
      return {
        loading2: false
      }
    },
    methods: {
      showload2() {
        let self = this
        this.loading2 = true
        setTimeout(() => {
          self.loading2 = false
        }, 3000)
      }
    }
  }
</script>
```

### 使用 bm-loading component

```html
<bm-button @click="showload">click me</bm-button>
<bm-loading :visible.sync="loading"></bm-loading>
<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
    methods: {
      showload() {
        let self = this
        this.loading = true
        setTimeout(() => {
          self.loading = false
        }, 3000)
      }
    }
  }
</script>
```

### API

#### Loading Attributes

| 属性      | 类型   | 默认值     | 可选值／参数 | 说明                                 |
| :-------- | :----- | :--------- | :----------- | :----------------------------------- |
| visible   | boolean   | false      |              | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
