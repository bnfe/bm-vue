<template lang="html">
  <svg :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${size}`]: !!size,
  }'
    :viewBox='`0 0 ${diameter} ${diameter}`'
    ref='svg'>
    <circle :class='`${prefixCls}__path`' :cx='half' :cy='half' :r='r' fill="none" :style='{ strokeWidth }' />
    <circle :class='`${prefixCls}__line`' :cx='half' :cy='half' :r='r' fill="none" :style='style' />
  </svg>
</template>

<script>
import { enumGenerator } from '@/utils/validator';

const diameter = 62;

export default {
  name: 'bmActivityIndicator',
  props: {
    prefixCls: {
      type: String,
      default: 'bm-activity-indicator',
    },
    size: {
      type: String,
      validator: enumGenerator(['xl', 'lg', 'sm', 'xs']),
      default: null,
    },
    strokeWidth: {
      type: Number,
      default: 5,
    },
    percent: {
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      diameter,
    };
  },
  computed: {
    half() {
      return this.diameter / 2;
    },
    r() {
      return this.half - (this.strokeWidth / 2);
    },
    style() {
      const round = 2 * Math.PI * this.r;
      return {
        strokeDasharray: `${(round * this.percent) / 100} ${round}`,
        strokeWidth: this.strokeWidth,
      };
    },
  },
};
</script>
