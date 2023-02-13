<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${size}`]: !!size,
  }' @click='handleClick' v-if='currentVisible'>
    <div :class='`${prefixCls}__header`'>
      <div :class='`${prefixCls}__icon`' v-if='$slots.icon || icon'>
        <slot name='icon'></slot>
        <bm-icon :type='icon' v-if='!$slots.icon'></bm-icon>
      </div>
    </div>
    <div :class='`${prefixCls}__body`'>
      <slot></slot>
    </div>
    <div :class='`${prefixCls}__footer`' v-if='closable || hasArrow'>
      <bm-icon type="arrow-right" v-if='hasArrow'></bm-icon>
      <bm-icon type="wrong" v-if='closable' @click='wrongIconClick'></bm-icon>
    </div>
  </div>
</template>

<script>
import { defaultThemeValidator } from '@/utils/validator';
import bmIcon from '../../icon';

export default {
  name: 'bmMessage',
  components: {
    bmIcon,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-message',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    size: {},
    closable: {
      type: Boolean,
      default: false,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentVisible: this.visible,
    };
  },
  watch: {
    visible(val) {
      if (val !== this.currentVisible) return;
      this.currentVisible = val;
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    wrongIconClick() {
      this.currentVisible = false;
      this.$emit('update:visible', false);
    },
  },
};
</script>
