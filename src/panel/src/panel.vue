<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bmPanel',
  props: {
    prefixCls: {
      type: String,
      default: 'bm-panel',
    },
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
