<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <a href="./">
          <img alt="logo" :src="require('site/styles/images/banu.png')" />
          Bm Vue
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="https://code.banu.cn"
              target="_blank"
              rel="noopener noreferrer"
              >GitLab</a
            >
          </li>
          <li>
            <el-select v-model="value" placeholder="请选择" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Format from "../../utils/format";
import Demo from "../../demos";

export default {
  data() {
    return {
      Demo,
      componentList: [],
      componentName: "",
      options: [],
      value: "",
    };
  },
  created() {
    const { version, versionList } = this.$store.state;
    this.initComponentList();
    this.options = versionList;
    this.value = version;
  },
  mounted() {},
  watch: {
    $route(val) {
      const { path } = this.$route;
      this.activeName = path.replace("/documents/", "");
    },
  },
  methods: {
    initComponentList() {
      const { components } = this.Demo;
      const List = [
        ...components.form,
        ...components.feedback,
        ...components.view,
        ...components.navigation,
        ...components.other,
      ];
      this.componentList = List.map((i) => ({
        label: `${i.name} ${i.description}`,
        value: Format.camel2Dash(i.name),
      }));
    },
    handleChange(val) {
      console.log(val);
      const v = this.$store.state.version;
      this.$router.push({
        path: `${Format.camel2Dash(val)}`,
        query: { v },
      });
      this.componentName = "";
    },
    handleVerChange(val) {
      window.location = this.options.find((i) => i.value === val).path;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 65px;
  background-color: #fff;

  .header-container {
    width: 100%;
    height: 100%;
  }

  .logo {
    float: left;
    width: 280px;
    height: 100%;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    img {
      height: 32px;
      margin-right: 10px;
      margin-top: -5px;
      border-radius: 4px;
    }
    a {
      display: block;
      height: 65px;
      line-height: 65px;
      color: #333;
      text-decoration: none;
    }
  }

  nav {
    float: right;
    height: 65px;
    line-height: 65px;
    margin-right: 60px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;

      li {
        float: left;
        width: 120px;
        text-align: center;
        font-size: 16px;
        color: #333;

        a {
          display: block;
          color: #333;
          cursor: pointer;

          &.active,
          &:hover {
            color: $site-theme;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  header {
    &-container {
      margin: 0 auto;
    }

    .logo {
      width: 100%;
    }

    .version,
    nav {
      display: none;
    }
  }
}
</style>
