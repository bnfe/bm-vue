<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--radius`]: !!radius,
    [`fade-${animationState}`]: true,
    }' :style='modalStyle'>
    <div :class='`${prefixCls}__wrapper`'>
      <div :class='{
        [`${prefixCls}__dialog`]: true,
        [`${animationType}-${animationState}`]: true,
        [`fade-${animationState}`]: true,
        }' :style='dialogStyle' @click='(e) => e.stopPropagation()'>
        <div :class='`${prefixCls}__header`' v-if='$slots.title || title'>
          <div :class='`${prefixCls}__header-title`'>
            <slot name='title'></slot>
            <template v-if="!$slots.header">{{title}}</template>
          </div>
          <div v-if='showClose' :class='`${prefixCls}__header-close`' @click='handleClose'><bm-icon type='wrong'/></div>
        </div>
        <div :class='`${prefixCls}__body`'>
          <slot></slot>
        </div>
        <div :class='`${prefixCls}__footer`' v-if='$slots.footer'>
          <slot name='footer'></slot>
        </div>
      </div>
    </div>
    <bm-mask :visible='maskVisible' @click='onMaskClick' :type='maskType'/>
  </div>
</template>

<script>
/**
 * Should use bm-popup instead of reapply mask.
 */
import bmMask from '../../mask';
import bmIcon from '../../icon';
import getContainer from '../../mixins/get-container';

export default {
  name: 'bmModal',
  components: {
    bmMask,
    bmIcon,
  },
  mixins: [getContainer],
  props: {
    prefixCls: {
      type: String,
      default: 'bm-modal',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    animationType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return [
          'fade', 'door', 'flip', 'rotate', 'zoom',
          'moveUp', 'moveDown', 'moveLeft', 'moveRight',
          'slideUp', 'slideDown', 'slideLeft', 'slideRight',
        ].indexOf(v) >= 0;
      },
      default: 'zoom',
    },
    maskType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['transparent', 'light', 'normal', 'dark'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    width: {
      type: [String, Number],
      default: '70%',
    },
    minWidth: {
      type: Number,
      default: 270,
    },
    title: String,
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalStyle() {
      return {
        display: !this.currentVisible ? 'none' : '',
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
    },
    dialogStyle() {
      return {
        width: this.width,
        minWidth: this.minWidth,
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (value) {
        this.enter();
      } else {
        this.animationState = 'leave';
        this.timer = setTimeout(() => {
          this.currentVisible = value;
          this.maskVisible = false;
        }, this.animationDuration);
      }
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      animationState: 'enter',
      maskVisible: this.visible,
    };
  },
  methods: {
    enter() {
      this.currentVisible = true;
      this.maskVisible = true;
      this.animationState = 'enter';
    },
    leave(reason, event) {
      // mask start leaving
      this.animationState = 'leave';
      this.$emit('update:visible', false);
      this.$emit('close', reason, event);

      if (this.timer) {
        clearTimeout(this.timer);
      }
      // remove mask after animationDuration
      this.timer = setTimeout(() => {
        this.currentVisible = false;
        this.maskVisible = false;
      }, this.animationDuration);
    },
    onMaskClick(event) {
      this.$emit('maskClick', event);
    },
    handleClose(event) {
      this.leave('close', event);
    },
  },
  mounted() {
    if (this.currentVisible) {
      this.enter();
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>
