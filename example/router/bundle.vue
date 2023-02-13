<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
  created() {
    const mRender = this.$route.meta.mRender;
    mRender().then(mod => {
      this.m = mod.default ? mod.default : mod;
      this.visible = false;
    })
  },
  render(h) {
    return this.visible ? h('bmLoading', {
      props: {
        visible: true,
      }
    }) : h(this.m);
  },
}
</script>
