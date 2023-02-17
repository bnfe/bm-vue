### Install 安装

```bash
npm install @bnfe/bm-vue -S
```

### Import 引入

> 全组件引入

```javascript
import Vue from "vue";
import bmVue from "@bnfe/bm-vue";
// 引入全局样式
import "@bnfe/bm-vue/bm-vue.default.css";
Vue.use(bmVue);
```

> 按需引入

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
      "libraryName": "@bnfe/bm-vue",
      "styleLibraryName": "theme"
    }
  ]]
}
```

接下来，如果你只希望引入部分组件，那么只需要写入以下内容：

```javascript
import { Button } from "@bnfe/bm-vue";
```

> 也可以通过 cdn 引入 umd 模块

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- import CSS -->
    <link rel="stylesheet" href="//xxx/@bnfe/bm-vue.default.css" />
    <!-- import JS -->
    <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
    <script src="//xxx/@bnfe/bm-vue.umd.js"></script>
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

### 自定义主题

写入以下内容：

```js
import "@bnfe/bm-vue/styles/default.scss"; // @bnfe/bm-vue组件默认函数以及variables
import "@bnfe/bm-vue/styles/custom-variables.scss"; // 用户自定义的variables覆盖默认常量配置
import "@bnfe/bm-vue/styles/components.scss"; // 加载组件样式

import Vue from "vue";
import bmVue from "@bnfe/bm-vue";
Vue.use(bmVue);
```
