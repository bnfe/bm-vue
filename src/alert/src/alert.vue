<template lang="html">
  <bm-modal ref='modal' :get-container="getContainer" :closeOnClickModal='false' :visible='currentVisible' :radius='radius' :animationDuration='animationDuration' :title='title'>
    <div :class='prefixCls'>
      <template v-if='!$slots.default'>{{message}}</template>
      <slot></slot>
    </div>
    <template slot='footer'>
      <bm-button block ghost @click='handleClose'>{{cancelText || cancelBtnText}}</bm-button>
    </template>
  </bm-modal>
</template>

<script>
import Locale from '../../utils/locale';
import bmModal from '../../modal';
import bmButton from '../../button';

export default {
  name: 'bmAlert',
  inject: {
    localeProvider: {
      default: '',
    },
  },
  components: {
    bmModal,
    bmButton,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-alert',
    },
    message: String,
    title: String,
    cancelText: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
  },
  computed: {
    cancelBtnText() {
      return this.localeProvider.lang ? this.getLocales('cancelText') : '关闭';
    },
  },
  methods: {
    // 国际化
    getLocales(key) {
      return Locale.getLocaleByComponent(this.localeProvider, 'Alert', key);
    },
    handleClose(event) {
      this.$refs.modal.leave('modal-close', event);
      this.$emit('update:visible', false);
      this.$emit('close', event);
      // for prototype alert
      this.currentVisible = false;
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.currentVisible = value;
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      getContainer: () => document.body,
    };
  },
};
</script>
