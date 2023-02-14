<template>
  <main>
    <div class="introduce">
      <div class="title"><span>Banu</span> Design</div>
      <div class="description">基于 Vue 的 UI 组件库，为用户体验而生</div>
      <div class="navigation">
        <button @click="doStart">开始使用</button>
        <button class="ghost" @click="goToGit">Github</button>
      </div>
    </div>
    <div class="righter">
      <div class="banner">
        <img :src="require('site/styles/images/index.png')" alt="" />
      </div>
    </div>
    <!-- <div class="copyright">
      <div class="copyright-cn">巴奴移动端组件库</div>
      <div class="copyright-en">Banu Design</div>
    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    doStart() {
      window.location.href = "#/documents/quick-start";
    },
    goToGit() {
      // window.location.href = "https://github.com";
      window.open("https://github.com", "_blank");
    },
  },
};
</script>

<style scoped lang="scss"></style>
