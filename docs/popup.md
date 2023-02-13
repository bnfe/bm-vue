## 弹出框 Popup

:::demo 基本

```html
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible1 = true"
    >开启</bm-button
  >
  从上方弹出
</bm-cell>
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible2 = true"
    >开启</bm-button
  >
  从下方弹出
</bm-cell>
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible3 = true"
    >开启</bm-button
  >
  从左侧弹出
</bm-cell>
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible4 = true"
    >开启</bm-button
  >
  从右侧弹出
</bm-cell>
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible5 = true"
    >开启</bm-button
  >
  从中间弹出
</bm-cell>

<bm-popup
  style="zIndex:2000"
  :visible.sync="visible1"
  direction="top"
  maskType="transparent"
>
  <div
    class="popup-box-top"
    style="width: 100%;padding: 10px;background: rgba(0,0,0,.7);color: #fff;font-size: 14px;text-align: center;"
    @click="visible1 = false"
  >
    更新成功，点击关闭弹层
  </div>
</bm-popup>

<bm-popup :visible.sync="visible2" direction="bottom">
  <div
    class="popup-box"
    style="height: 100%;padding: 20px 20px 100px;background: #fff;"
  >
    <bm-button size="sm" @click="visible2 = false">关闭弹层</bm-button>
    <bm-button size="sm" @click="showAlert">二次弹窗</bm-button>
  </div>
</bm-popup>

<bm-popup :visible.sync="visible3" direction="left">
  <div
    class="popup-box-left"
    style="width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;"
  >
    <bm-button size="sm" @click="visible3 = false">关闭弹层</bm-button>
  </div>
</bm-popup>

<bm-popup :visible.sync="visible4" direction="right">
  <div
    class="popup-box"
    style="width:160px;height: 100%;padding: 20px 20px 100px;background: #fff;"
  >
    <bm-button size="sm" @click="visible4 = false">关闭弹层</bm-button>
  </div>
</bm-popup>

<bm-popup :visible.sync="visible5" animation-type="zoom" direction="center">
  <div
    class="popup-box"
    style="width:160px;height: 160px;padding: 20px;background: #fff;display: flex;justify-content: center;align-items: center;"
  >
    <bm-button size="sm" @click="visible5 = false">关闭弹层</bm-button>
  </div>
</bm-popup>
```

:::

:::demo 设置挂载容器

```html
<bm-cell>
  <bm-button size="xs" slot="description" @click="visible6 = true"
    >开启</bm-button
  >
  从下方弹出
</bm-cell>

<bm-popup
  :visible.sync="visible6"
  direction="bottom"
  :get-container="getContainer"
>
  <div
    class="popup-box"
    style="height: 100%;padding: 20px 20px 100px;background: #fff;"
  >
    <bm-button size="sm" @click="visible6 = false">设置挂载容器</bm-button>
  </div>
</bm-popup>
```

:::

### Vue Script

```javascript
<script name="vue">
const div1 = document.body;
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
    }
  },
  methods: {
    showAlert() {
      this.$bmAlert('二次弹窗');
    },
    getContainer: () => div1,
  },
};
</script>
```

### API

#### Popup Attributes

| 属性               | 类型    | 默认值   | 可选值／参数                                                                                                                               | 说明                                        |
| :----------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| visible            | boolean | false    |                                                                                                                                            | 是否显示, 支持.sync 修饰符                  |
| direction          | string  | 'center' | 'top', 'bottom', 'left', 'right', 'center'                                                                                                 | 弹出方向                                    |
| get-container      | func    |          |                                                                                                                                            | 自定义挂载 Dom 节点                         |
| animation-type     | string  | 'fade'   | 'fade', 'door', 'flip', 'rotate', 'zoom', 'moveUp', 'moveDown', 'moveLeft', 'moveRight', 'slideUp', 'slideDown', 'slideLeft', 'slideRight' | 动画类型（仅在 direction 为 center 时生效） |
| animation-duration | number  | 200      |                                                                                                                                            | 动画执行时间                                |
| has-mask           | boolean | false    |                                                                                                                                            | 是否包含遮罩                                |
| mask-type          | string  | 'normal' | 'transparent', 'normal'                                                                                                                    | 遮罩层的类型                                |

#### Popup Events

| 事件名称   | 说明                 | 回调参数       |
| :--------- | :------------------- | :------------- |
| mask-click | 点击遮罩后触发的事件 | event 事件对象 |
