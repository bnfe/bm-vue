<template>
  <div class="index-page">
    <PageHeader></PageHeader>
    <PageMain></PageMain>
  </div>
</template>

<script>
import PageHeader from "../components/Header.vue";
import PageMain from "../components/Main.vue";
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.index-page {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  header {
    background-color: transparent;

    .header-container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 30px;
    }

    .logo {
      text-align: left;
    }
  }

  main {
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    padding: 65px 30px;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .introduce {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    .title {
      font-size: 64px;
      font-weight: bold;
      line-height: 1;

      span {
        color: $site-theme;
      }
    }

    .description {
      margin-top: 30px;
      font-size: 18px;
      line-height: 1.5;
    }

    .navigation {
      margin-top: 100px;
      margin-bottom: 60px;

      button {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: $site-theme;
        border: 0;
        color: #fff;
        font-size: 18px;
        border-radius: 25px;
        outline: none;
        margin-right: 15px;
        margin-bottom: 10px;
        padding: 0 30px;
        cursor: pointer;

        &.ghost {
          border: 1px solid $site-theme;
          color: $site-theme;
          background-color: #fff;
        }
      }
    }
  }

  .righter {
    height: 100%;
    position: relative;
    margin-left: 160px;
    .banner {
      position: relative;
      width: 600px;
      height: 100%;

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-70%);
        width: 100%;
      }
    }
  }
  .copyright {
    position: fixed;
    bottom: 40px;
    text-align: center;
    color: #666;
    &-cn {
      font-size: 14px;
    }

    &-en {
      font-size: 12px;
    }
  }
}
</style>
