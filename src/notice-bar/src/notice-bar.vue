<script>
import { defaultThemeValidator } from '@/utils/validator';
import bmMessage from '../../message';

export default {
  name: 'bmNoticeBar',
  components: {
    bmMessage,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-noticebar',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'warning',
    },
    closable: {
      type: Boolean,
      default: false,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    size: {},
    icon: {
      type: String,
      default: 'broadcast',
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
    contentStyle() {
      return {
        left: `${this.offset}px`,
      };
    },
  },
  data() {
    return {
      offset: 0,
    };
  },
  methods: {
    handleClick(event) {
      this.currentVisible = false;
      this.$emit('click', event);
    },
    handleUpdate(val) {
      this.$emit('update:visible', val);
    },
  },
  mounted() {
    if (!this.scrollable) return;

    const distance = this.$refs.wrapper.offsetWidth - this.$refs.content.offsetWidth;
    if (distance > 0) return;

    let delay = 1000;
    this.moveInterval = setInterval(() => {
      let { offset } = this;
      if ((offset < distance || offset >= 0) && delay > 0) {
        delay -= 50;
        return;
      }

      delay = 1000;
      offset = (offset < distance)
        ? 0
        : (offset - 1);

      this.offset = offset;
    }, 50);
  },
  beforeDestroy() {
    if (this.moveInterval) {
      clearInterval(this.moveInterval);
    }
  },
  render(h) { // eslint-disable-line no-unused-vars
    const {
      prefixCls,
      theme,
      currentVisible,
      closable,
      hasArrow,
      handleClick,
      handleUpdate,
      contentStyle,
      icon,
    } = this;

    return (
      <bm-message
        size='lg'
        visible={currentVisible}
        on-updatevisible={handleUpdate}
        closable={closable}
        theme={theme}
        hasArrow={hasArrow}
        on-click={handleClick}
        icon={icon}>
        <div class={prefixCls} ref='wrapper'>
          <div class={`${prefixCls}__body`} ref='content' style={contentStyle}>
            {this.$slots.default}
          </div>
        </div>
      </bm-message>
    );
  },
};
</script>
