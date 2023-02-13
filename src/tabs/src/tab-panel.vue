<script>
import bmCarouselItem from '../../carousel-item';

let paneIndex = 0;
export default {
  name: 'bmTabPanel',
  components: {
    bmCarouselItem,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-tabs',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
    name: [String, Number],
  },
  computed: {
    currentName() {
      return this.container && this.container.value;
    },
    slideable() {
      return this.container && this.container.slideable;
    },
    container() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'bmTabs') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
  },
  watch: {
    label() {
      this.notifyParent();
    },
    name() {
      this.notifyParent();
    },
    disabled() {
      this.notifyParent();
    },
  },
  created() {
    this._panelIndex = paneIndex;
    paneIndex += 1;
    // for vue2.1.0+ can be scoped slot here
    this.notifyParent();
  },
  beforeDestroy() {
    this.notifyParent(false);
  },
  methods: {
    notifyParent(flag = true) {
      if (this.container) {
        this.container.notify(this, flag);
      }
    },
  },
  render(h) { // eslint-disable-line no-unused-vars
    const {
      prefixCls,
      currentName,
      name,
      slideable,
    } = this;

    const cls = {
      [`${prefixCls}__panel-item`]: true,
      [`${prefixCls}__panel-item--active`]: name === currentName,
    };

    const panel = slideable ? <bm-carousel-item>{this.$slots.default}</bm-carousel-item>
      :
      (
        <div class={`${prefixCls}__panel`}>
          <div class={cls}>
            {this.$slots.default}
          </div>
        </div>
      );

    return panel;
  },
};
</script>
