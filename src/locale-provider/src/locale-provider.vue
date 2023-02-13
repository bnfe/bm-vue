<template>
  <div :class="{[`${prefixCls}`]: true}">
    <slot></slot>
  </div>
</template>
<script>
import defaultLocale from './default';

export default {
  name: 'bmLocaleProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'bm-locale-provider',
    },
    locale: {
      type: Object,
      default: () => defaultLocale,
    },
    lang: {
      type: String,
      default: 'zh_CN',
    },
  },
  provide() {
    return {
      localeProvider: this,
    };
  },
};
</script>

