## 列表项 Cell

:::demo 普通列表项

```html
<bm-cell title="标题文字"></bm-cell>
```

:::

:::demo 带描述的列表项

```html
<bm-cell title="标题文字" description="描述文字"></bm-cell>
<bm-cell title="标题文字">
  <bm-icon slot="description" type="right"></bm-icon>
</bm-cell>
```

:::

:::demo 带图标、描述的列表项

```html
<bm-cell title="标题文字">
  <bm-icon type="right" slot="icon"></bm-icon>
  <div slot="description">描述文字</div>
</bm-cell>
<bm-cell title="标题文字">
  <img
    style="width:24px;height:24px"
    src="https://raw.githubusercontent.com/bnfe/bm-vue/main/site/styles/images/index.png"
    alt=""
    slot="icon"
  />
  <div slot="description">描述文字</div>
</bm-cell>
```

:::

:::demo 带跳转的列表项

```html
<bm-cell is-link @click="() => {}">标题文字</bm-cell>
<bm-cell is-link @click="() => {}">标题文字</bm-cell>
```

:::

:::demo 带描述、箭头、跳转的列表项

```html
<bm-cell is-link title="标题文字" has-arrow @click="() => {}">
  <div slot="description">描述文字</div>
</bm-cell>
<bm-cell is-link title="标题文字" has-arrow @click="() => {}">
  <div slot="description">描述文字</div>
</bm-cell>
```

:::

:::demo 带图标、描述、箭头、跳转的列表项

```html
<bm-cell is-link title="标题文字" has-arrow @click="() => {}">
  <div slot="description">描述文字</div>
  <bm-icon type="right" slot="icon"></bm-icon>
</bm-cell>
<bm-cell is-link title="标题文字" has-arrow @click="() => {}">
  <div slot="description">描述文字</div>
  <img
    style="width:24px;height:24px"
    src="https://raw.githubusercontent.com/bnfe/bm-vue/main/site/styles/images/index.png"
    alt=""
    slot="icon"
  />
</bm-cell>
<bm-cell is-link has-arrow @click="() => {}">
  <div slot="description">描述文字</div>
  <div class="box" slot="title">
    <div class="box-title">标题文字</div>
    <div class="box-description">描述文字</div>
  </div>
  <img
    style="width:48px;height:48px"
    src="https://raw.githubusercontent.com/bnfe/bm-vue/main/site/styles/images/index.png"
    alt=""
    slot="icon"
  />
</bm-cell>
```

:::

:::demo 提示信息

```html
<bm-cell title="标题">
  <bm-message theme="error" slot="help">
    <bm-icon type="info-round"></bm-icon>
    <span style="marginLeft: 5px">标题不能为空</span>
  </bm-message>
  <bm-input type="text" placeholder="请输入标题"></bm-input>
</bm-cell>
```

:::

### API

#### Cell Attributes

| 属性        | 类型    | 默认值 | 可选值／参数 | 说明                                   |
| :---------- | :------ | :----- | :----------- | :------------------------------------- |
| isLink      | boolean | false  |              | 是否带激活样式                         |
| title       | string  |        |              | 标题                                   |
| help        | string  |        |              | 下方提示信息 通常配合`Message`组件使用 |
| description | string  |        |              | 描述                                   |
| has-arrow   | boolean | false  |              | 是否显示箭头                           |
