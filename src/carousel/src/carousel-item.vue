<template lang="html">
  <div :class='`${prefixCls}__item`'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bmCarouselItem',
  props: {
    prefixCls: {
      type: String,
      default: 'bm-carousel', // naming different from bm
    },
  },
};
</script>
