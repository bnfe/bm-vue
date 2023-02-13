<template lang="html">
  <div :class="`${prefixCls}__body`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bmPanelBody',
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
