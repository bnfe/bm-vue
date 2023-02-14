<template lang="html">
  <div class='app-container' :style='{minHeight: windowHeight + "px"}'>
    <a class="github" href="https://github.com" target="_blank">
      <img :src="require('../styles/images/github.png')" alt="">
    </a>
    <slot></slot>
  </div>
</template>

<script>
import '../styles/components/Container.scss';

export default {
  data() {
    return {
      windowHeight: window.innerHeight
    }
  }
}
</script>

<style lang="scss">
.app-container{
  .github{
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
