<template lang="html">
  <bm-toast :prefixCls='prefixCls' :visible.sync='currentVisible' :duration='0'>
    <bm-activity-indicator size='lg' class='rotate360' />
  </bm-toast>
</template>

<script>
import bmToast from '@/toast';
import bmActivityIndicator from '@/activity-indicator';

export default {
  name: 'bmLoading',
  components: {
    bmToast,
    bmActivityIndicator,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-loading',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentVisible: {
      get() {
        return this.visible;
      },

      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
};
</script>
