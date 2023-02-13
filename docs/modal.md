## 模态框 Modal

::: demo 基本

```html
<bm-cell>
  <bm-button slot="description" size="xs" @click="visible1 = true"
    >开启</bm-button
  >
  span普通
</bm-cell>

<bm-cell>
  <bm-button slot="description" size="xs" @click="visible2 = true"
    >开启</bm-button
  >
  圆角
</bm-cell>

<bm-cell>
  <bm-button slot="description" size="xs" @click="visible3 = true"
    >开启</bm-button
  >
  遮罩层可关闭
</bm-cell>

<bm-cell>
  <bm-button slot="description" size="xs" @click="visible4 = true"
    >开启</bm-button
  >
  无头部
</bm-cell>

<bm-cell>
  <bm-button slot="description" size="xs" @click="visible5 = true"
    >开启</bm-button
  >
  动画效果
</bm-cell>

<bm-modal
  :visible.sync="visible1"
  @close="handleClose"
  title="标题"
  :showClose="true"
>
  模态框内容
</bm-modal>

<bm-modal
  :visible.sync="visible2"
  @close="handleClose"
  radius
  :showClose="true"
>
  <div slot="title" style="textAlign:left">标题</div>
  模态框内容
</bm-modal>

<bm-modal
  :visible.sync="visible3"
  @close="handleClose"
  @maskClick="visible3 = false"
  title="标题"
  :showClose="true"
>
  遮罩层可关闭
</bm-modal>

<bm-modal
  :visible.sync="visible4"
  @close="handleClose"
  @maskClick="visible4 = false"
>
  无头部
</bm-modal>

<bm-modal
  :visible.sync="visible5"
  @close="handleClose"
  animationType="rotate"
  @maskClick="visible5 = false"
  title="标题"
  :showClose="true"
>
<div style="height:100px">
  当前使用的是rotate旋转效果。<br /><br />
  支持多种动画效果：<br />
  zoom：缩放效果（默认）<br />
  rotate：旋转效果<br />
  fade：淡出淡入效果<br />
  door：开关门效果<br />
  flip：翻转效果<br />
  moveUp、moveDown、moveLeft、moveRight：移出移入效果<br />
  slideUp、slideDown、slideLeft、slideRight：滑出滑入效果<br />
</div>
</bm-modal>
```

:::

::: demo 特定场景

```html
<bm-cell>
  <bm-button
    slot="description"
    size="xs"
    @click="visible6 = true"
    theme="warning"
    >开启</bm-button
  >
  警告框 Alert
</bm-cell>

<bm-cell>
  <bm-button
    slot="description"
    size="xs"
    @click="visible7 = true"
    theme="warning"
    >开启</bm-button
  >
  确认框 Confirm
</bm-cell>

<bm-alert
  :visible.sync="visible6"
  radius
  title="警告"
  message="这里是警告信息"
  @close="handleClose"
></bm-alert>
<bm-confirm
  :visible="visible7"
  title="确认信息"
  message="你确定要这样做吗？"
  :ok="handleOk"
  :cancel="handleCancel"
></bm-confirm>
```

:::

#### 警告框 使用全局方法 \$bmAlert

```html
<div @click="handleClick"></div>
<script>
  export default {
    methods: {
      handleClick() {
        this.$bmAlert('警告', {
          callback: event => {
            console.log(event)
          }
        })
      }
    }
  }
</script>
```

```html
<div @click='handleClick'></div>
<script>
export default{
  methods:{
    handleClick(){
      const h = this.$createElement;
      // 这里的message可以是VNode
      const message = h('p', null, [
        h('span', null, '内容可以是 '),
        h('i', { style: 'color: teal' }, 'VNode')
      ]);
      this.$bmAlert(message, {
        callback: (event) => {
          console.log(event)
        }
      })
    }
  }
}
```

#### 或者使用 bm-alert Component

```html
<bm-alert
  :visible.sync="visible"
  radius
  title="警告"
  message="这里是警告信息"
  @close="handleClose"
></bm-alert>
```

#### 确认框 使用全局方法 \$bmConfirm

```html
<div @click="handleClick"></div>
<script>
  export default {
    methods: {
      handleClick() {
        const h = this.$createElement
        // message 可以是VNode 或者 String
        const message = h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
        // $bmConfirm 参数为 <?message: String, options: Object>
        this.$bmConfirm({
          message,
          ok: e => {
            this.$bmToast('ok')
            return true // 此处返回true, 会关闭confirm
          },
          cancel: e => {
            this.$bmToast('closed')
          }
        })
      }
    }
  }
</script>
```

注意：这里的 `ok` 和 `cancel` 需要使用 Arrow Function, 这样内部的 this 才会指向当前的 vue 实例, 另外，ok 函数只有在返回 true 的时候会关闭 Confirm, 而 cancel 会自动关闭 Confirm

或者使用模板

```html
<bm-confirm
  :visible="visible"
  title="确认信息"
  message="你确定吗？"
  :ok="handleOk"
  :cancel="handleCancel"
></bm-confirm>
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
      visible5: false,
      visible6: false,
      visible7: false,
    };
  },
  methods: {
    handleClose(reason, event){
      console.log(reason, event);
    },
    handleOk(){
      alert('ok')
    },
    showAlert() {
      this.$bmAlert('警告12', {
        callback: (event) => {
          console.log(event)
        }
      })
    },
    handleCancel(){
      this.visible7 = false
    }
  },
};
</script>
```

### API

#### Modal Attributes

| 属性              | 类型           | 默认值   | 可选值／参数                                                                                                                             | 说明                       |
| :---------------- | :------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| shape             | string         | 无       | 'radius'                                                                                                                                 | 形状                       |
| visible           | boolean           | false    |                                                                                                                                          | 是否显示, 支持.sync 修饰符 |
| ok-text            | string         | '确定'   |                                                                                                                                          | 确认按钮文案               |
| cancel-text        | string         | '关闭'   |                                                                                                                                          | 取消按钮文案               |
| animation-type     | string         | 'fade'   | 'fade', 'door', 'flip', 'rotate', 'zoom','moveUp', 'moveDown', 'moveLeft', 'moveRight','slideUp', 'slideDown', 'slideLeft', 'slideRight' | 动画效果                   |
| animationDuration | number         | 200      |                                                                                                                                          | 动画执行时间               |
| width             | string, number | '70%'    |                                                                                                                                          | 宽度                       |
| get-container      | Func           |          |                                                                                                                                          | 指定挂载的父容器 DOM 节点  |

#### Modal Events

| 事件名称  | 说明                   | 回调参数               |
| :-------- | :--------------------- | :--------------------- |
| close     | modal 关闭时触发的事件 | reason, event 事件对象 |
| mask-click | 点击遮罩后触发的事件   | event 事件对象         |

#### Alert Events

| 事件名称 | 说明                   | 回调参数       |
| :------- | :--------------------- | :------------- |
| close    | alert 关闭时触发的事件 | event 事件对象 |

#### Confirm Events

| 事件名称 | 说明                     | 回调参数       |
| :------- | :----------------------- | :------------- |
| ok       | confirm 确定时触发的事件 | event 事件对象 |
| cancel   | confirm 取消时触发的事件 | event 事件对象 |
