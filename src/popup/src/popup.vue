<script>
import bmMask from '../../mask';
import getContainer from '../../mixins/get-container';

export default {
  name: 'bmPopup',
  components: {
    bmMask,
  },
  mixins: [getContainer],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['top', 'right', 'bottom', 'left', 'center'].indexOf(v) >= 0;
      },
      default: 'center',
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
      default: 'fade',
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    hasMask: {
      type: Boolean,
      default: true,
    },
    maskType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['normal', 'transparent'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
    prefixCls: {
      type: String,
      default: 'bm-popup',
    },
  },
  computed: {
    transitionDurationStyle() {
      return {
        WebkitTransitionDuration: `${this.animationDuration}ms`,
        transitionDuration: `${this.animationDuration}ms`,
      };
    },
    animationDurationStyle() {
      return {
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
    },
    directionCenter() {
      return this.direction === 'center';
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      animationState: 'enter',
      maskVisible: this.hasMask && this.visible,
    };
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.removeTimer();
      if (value) {
        this.enter();
      } else {
        this.leave();
      }
    },
  },
  methods: {
    enter() {
      this.currentVisible = true;
      this.animationState = 'enter';
      this.timerEnter = setTimeout(() => {
        this.maskVisible = true;
      }, 10);
    },
    leave() {
      this.animationState = 'leave';
      this.maskVisible = false;
      this.timerLeave = setTimeout(() => {
        this.currentVisible = false;
      }, this.animationDuration);
    },
    removeTimer() {
      if (this.timerEnter) {
        clearTimeout(this.timerEnter);
      }
      if (this.timerLeave) {
        clearTimeout(this.timerLeave);
      }
    },
    onMaskClick(event) {
      this.$emit('maskClick', event);
    },
  },
  mounted() {
    if (this.currentVisible) {
      this.enter();
    }
  },
  beforeDestroy() {
    this.removeTimer();
  },
  render() {
    const {
      prefixCls,
      hasMask,
      direction,
      maskType,
      onMaskClick,
      maskVisible,
      currentVisible,
      animationState,
      transitionDurationStyle,
      animationDurationStyle,
    } = this;
    const popupCls = maskVisible ? `${prefixCls} ${prefixCls}--opened` : `${prefixCls}`;
    return (
      <transition>
        {
          currentVisible &&
          <div
            class={`${popupCls}`}
          >
            <div class={`${prefixCls}__wrapper ${prefixCls}__wrapper-${direction}`}
              style={transitionDurationStyle}
            >
              {this.$slots.default}
            </div>
            {
              hasMask &&
                <bm-mask
                  class={`fade-${animationState}`}
                  style={animationDurationStyle}
                  visible={maskVisible}
                  type={maskType}
                  onClick={onMaskClick} />
            }
          </div>
        }
      </transition>
    );
  },
};
</script>
