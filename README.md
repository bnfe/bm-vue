### Install 安装

```bash
npm install bm-vue --save
```

### Import 引入

- 全组件引入

```javascript
import Vue from "vue";
import bmVue from "bm-vue";
// 引入全局样式
import "bm-vue/bm-vue.default.css";
Vue.use(bmVue);
```

- 按需引入

借助`ElementUI`提供的[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 添加：

```javascript
{
  // ...
  "plugins": [["component", {
      "libraryName": "bm-vue",
      "styleLibraryName": "theme"
    }
  ]]
}
```

接下来，如果你只希望引入部分组件，那么需要在 main.js 中写入以下内容：

```javascript
import { Button } from "bm-vue";
Vue.use(Button);
```

- 也可以通过 cdn 引入 umd 模块

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- import CSS -->
    <link rel="stylesheet" href="https://xxx/bm-vue.default.css" />
    <script src="https://xxx/bm-vue.umd.js"></script>
  </head>
  <body>
    <div id="app">
      <bm-button theme="primary">普通按钮</bm-button>
    </div>
  </body>
  <script>
    new Vue({
      el: "#app",
    });
  </script>
</html>
```

### 动态修改 variables.scss 常量实现自定义主题

写入以下内容：

```js
import "bm-vue/styles/default.scss"; // bm-vue组件默认函数以及variables
import "bm-vue/styles/custom-variables.scss"; // 用户自定义的variables覆盖默认常量配置
import "bm-vue/styles/components.scss"; // 加载组件样式

import Vue from "vue";
import bmVue from "bm-vue";
Vue.use(bmVue);
```
