<template lang="html">
  <div :class="{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${shape}`]: !!shape,
      [`${prefixCls}--compact`]: compact,
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--disabled`]: disabled,
    }">
    <slot></slot>
  </div>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'bmRadioGroup',
  props: {
    prefixCls: {
      type: String,
      default: 'bm-radio-group',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    type: {
      type: String,
      validator: enumGenerator(['button', 'cell']),
      default: null,
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'radius', 'round']),
      default: 'radius',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
};
</script>
