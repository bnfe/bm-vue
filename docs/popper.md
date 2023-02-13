## 气泡层 Popper

:::demo 基本

```html
<bm-cell class="direction-demo">
  <div>
    <div style="marginLeft: 60px">
      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="topLeft"
        content="topLeft text"
      >
        <bm-button ghost size="xs">TL</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="top"
        content="top text"
      >
        <bm-button ghost size="xs">Top</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="topRight"
        content="topRight text"
      >
        <bm-button ghost size="xs">TR</bm-button>
      </bm-popper>
    </div>

    <div style="width: 60px;float: left;clear: both">
      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="leftTop"
        content="leftTop text"
      >
        <bm-button ghost size="xs">LT</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="left"
        content="left text"
      >
        <bm-button ghost size="xs">Left</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="leftBottom"
        content="leftBottom text"
      >
        <bm-button ghost size="xs">LB</bm-button>
      </bm-popper>
    </div>

    <div style="width: 60px;marginLeft: 260px;">
      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="rightTop"
        content="rightTop text"
      >
        <bm-button ghost size="xs">RT</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="right"
        content="right text"
      >
        <bm-button ghost size="xs">Right</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="rightBottom"
        content="rightBottom text"
      >
        <bm-button ghost size="xs">RB</bm-button>
      </bm-popper>
    </div>

    <div style="marginLeft: 60px;clear: both">
      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottomLeft"
        content="bottomLeft text"
      >
        <bm-button ghost size="xs">BL</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottom"
        content="bottom text"
      >
        <bm-button ghost size="xs">Bottom</bm-button>
      </bm-popper>

      <bm-popper
        :arrowPointAtCenter="arrow === '1'"
        className="custom-arrow-content"
        hasArrow
        direction="bottomRight"
        content="bottomRight text"
      >
        <bm-button ghost size="xs">BR</bm-button>
      </bm-popper>
    </div>
  </div>
</bm-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      arrow: '1',
    }
  },
  methods: {

  },
};
</script>
```

### API

#### Attributes

| 属性               | 类型                                 | 默认值                                 | 说明                                                                                                                                                      |
| :----------------- | :----------------------------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className          | string                               | -                                      | 气泡层类名追加                                                                                                                                            |
| content            | String                            | -                                      | 显示内容，也可以用slot                                                                                                                                                 |
| hasArrow           | boolean                              | false                                  | 是否显示箭头节点<font color="red">（注：需要自行定义箭头样式）</font>                                                                                     |
| destroy            | boolean                              | true                                   | 气泡层关闭后是否移除节点                                                                                                                                  |
| animationType      | string                               | 'zoom-fade'                            | 可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight`           |
| animationDuration  | number                               | 200                                    | 动画执行时间（单位：毫秒）                                                                                                                                |
| arrowPointAtCenter | boolean                              | false                                  | 箭头是否指向目标元素中心                                                                                                                                  |
| mouseEnterDelay    | number                               | 100                                    | 鼠标移入显示气泡层的延时时间（单位：毫秒）                                                                                                                |
| mouseLeaveDelay    | number                               | 100                                    | 鼠标移出隐藏气泡层的延时时间（单位：毫秒）                                                                                                                |
| direction          | string                               | 'top'                                  | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |
| trigger            | string                               | 移动端为'click' <br /> 桌面端为'hover' | 触发方式，可选值为：`click` 点击触发状态、`hover` hover 状态触发、`focus` 聚焦状态触发、`manual` 受控触发、`contextMenu` 右键触发                         |
| visible            | boolean                              | false                                  | 是否显示，`trigger='manual'` 时有效                                                                                                                       |

#### Events

| 属性               | 类型                                 | 默认值                                 | 说明                                                                                                                                                      |
| :----------------- | :----------------------------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @visibleChange    | (visible?: boolean) => void          | noop                                   | 显示/隐藏 气泡层触发的事件                                                                                                                                |
