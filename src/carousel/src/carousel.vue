<script>
import { deepCloneVNode } from '@/utils/vdom';
import bmDrag from '@/drag';

export default {
  name: 'bmCarousel',
  components: {
    bmDrag,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-carousel', // naming different from bm
    },
    direction: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['left', 'right', 'top', 'bottom'].indexOf(v) >= 0;
      },
      default: 'left',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
    loop: {
      type: Boolean,
      default: false,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    speed: {
      type: Number,
      default: 300,
    },
    swipeable: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    autoPlayIntervalTime: {
      type: Number,
      default: 3000,
    },
    moveDistanceRatio: {
      type: Number,
      default: 0.5,
    },
    moveTimeSpan: {
      type: Number,
      default: 300,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    itemsStyle() {
      return {
        height: !this.isX && `${this.height}`,
        whiteSpace: this.isX && 'nowrap',
      };
    },
    paginationStyle() {
      return {
        display: this.isX && 'inline-block',
      };
    },
    isX() {
      return (['left', 'right'].indexOf(this.direction) > -1);
    },
  },
  data() {
    return {
      currentActiveIndex: this.activeIndex,
    };
  },
  watch: {
    activeIndex(val, oldval) { // eslint-disable-line no-unused-vars
      if (val === this.currentActiveIndex) return;
      this.currentActiveIndex = val;
      this.onSlideTo(this.currentActiveIndex);
    },
  },
  mounted() {
    this.startAutoPlay();
    window.addEventListener('resize', this.resize);
    this.$refs.carouselItems.addEventListener('webkitTransitionEnd', this.transitionEnd);
    this.$refs.carouselItems.addEventListener('transitionend', this.transitionEnd);
    // ????????????????????????
    this.onJumpTo(this.currentActiveIndex);
  },
  created() {
    // this.dragState = {};
    this.scrolling = false; // is user scrolling page instead of dragging
    this.translateX = 0;
    this.translateY = 0;
    this.moveInterval = null;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    this.$refs.carouselItems.removeEventListener('webkitTransitionEnd', this.transitionEnd);
    this.$refs.carouselItems.removeEventListener('transitionend', this.transitionEnd);
  },
  methods: {
    onDragStart() {
      // ???????????????????????????drag??????
      if (!this.swipeable) return;
      this.scrolling = false;
      // ???????????????transition???????????????????????????
      const activeIndex = this.currentActiveIndex;
      const maxLength = this.validSlotLength();
      if (activeIndex <= 0) {
        this.onJumpTo(0);
      } else if (activeIndex >= (maxLength - 1)) {
        this.onJumpTo(maxLength - 1);
      }

      // ??????????????????
      this.pauseAutoPlay();
    },
    onDragMove(event, { offsetX, offsetY }) {
      // ???????????????????????????drag??????
      if (!this.swipeable) return;

      const distanceX = Math.abs(offsetX);
      const distanceY = Math.abs(offsetY);

      if (this.isX &&
        (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX))) {
        this.scrolling = true;
        return;
      }

      if (!this.isX &&
        (distanceY < 5 || (distanceY >= 5 && distanceX >= 1.73 * distanceY))) {
        this.scrolling = true;
        return;
      }

      this.scrolling = false;

      // ????????????????????????
      if (!this.loop) {
        // ????????????????????????
        if (this.isLastIndex()) {
          if (this.isX && offsetX < 0) return;
          if (!this.isX && offsetY < 0) return;
        }

        // ????????????????????????
        if (this.isFirstIndex()) {
          if (this.isX && offsetX > 0) return;
          if (!this.isX && offsetY > 0) return;
        }
      }

      event.preventDefault();
      this.doTransition({ x: this.translateX + offsetX, y: this.translateY + offsetY }, 0);
      return true;
    },

    onDragEnd(event, { offsetX, offsetY, startTime }) { // eslint-disable-line no-unused-vars
      // ???????????????????????????drag??????
      if (!this.swipeable) return;

      if (this.scrolling ||
          (!offsetX && !offsetY)
      ) {
        this.scrolling = false;
        return;
      }

      const dom = this.$refs.carouselItems;

      const moveDistanceRatio = this.isX
        ? Math.abs(offsetX / dom.offsetWidth)
        : Math.abs(offsetY / dom.offsetHeight);

      const timeSpan = new Date().getTime() - startTime.getTime();
      let activeIndex = this.currentActiveIndex;

      // ?????????????????????
      // 1.??????????????????0????????????????????????????????????????????????moveDistanceRatio
      // 2.???????????????????????????moveTimeSpan =>????????????
      if (moveDistanceRatio >= this.moveDistanceRatio || timeSpan <= this.moveTimeSpan) {
        activeIndex = ((this.isX && offsetX > 0) || (!this.isX && offsetY > 0))
          ? (this.currentActiveIndex - 1)
          : (this.currentActiveIndex + 1);
      }
      this.onSlideTo(activeIndex);
      // change from here
      this.$emit('change', activeIndex);
      // ??????????????????
      this.startAutoPlay();
    },

    // ??????????????????
    startAutoPlay() {
      this.moveInterval = (this.autoPlay && setInterval(() => {
        let activeIndex = this.currentActiveIndex;
        const maxLength = this.validSlotLength();
        const isLeftTop = ['left', 'top'].indexOf(this.direction) > -1;
        activeIndex = isLeftTop
          ? (activeIndex + 1)
          : (activeIndex - 1);

        const isEnd = (isLeftTop && activeIndex === maxLength) ||
          (!isLeftTop && activeIndex === -1);
        // ?????????????????????
        if (!this.loop && isEnd) {
          this.pauseAutoPlay();
          return;
        }
        this.onSlideTo(activeIndex);
      }, this.autoPlayIntervalTime));
    },
    // ??????????????????
    pauseAutoPlay() {
      if (this.moveInterval) {
        clearInterval(this.moveInterval);
      }
    },
    // ?????????????????????
    onSlideTo(index) {
      this.$emit('changeStart', this.currentActiveIndex);
      this.onMoveTo(index, this.speed);
    },
    // ????????????????????????
    onJumpTo(index) {
      this.onMoveTo(index, 0);
      this.$emit('change', index);
    },
    // ??????????????????????????????
    onMoveTo(index, speed) {
      const dom = this.$refs.carouselItems;
      if (!dom) return;

      this.translateX = -dom.offsetWidth * (index + this.loop);
      this.translateY = -dom.offsetHeight * (index + this.loop);
      this.doTransition({ x: this.translateX, y: this.translateY }, speed);

      const maxLength = this.validSlotLength();
      if (index > maxLength - 1) {
        index = 0;
      } else if (index < 0) {
        index = maxLength - 1;
      }
      this.currentActiveIndex = index;
    },
    // ??????????????????
    doTransition(offset, duration) {
      const dom = this.$refs.carouselItems;
      let x = 0;
      let y = 0;

      if (this.isX) {
        x = offset.x;
      } else {
        y = offset.y;
      }

      dom.style.webkitTransitionDuration = `${duration}ms`;
      dom.style.transitionDuration = `${duration}ms`;
      dom.style.webkitTransform = `translate3d(${x}px, ${y}px, 0)`;
      dom.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    transitionEnd() {
      const activeIndex = this.currentActiveIndex;
      const dom = this.$refs.carouselItems;
      this.translateX = -dom.offsetWidth * (activeIndex + this.loop);
      this.translateY = -dom.offsetHeight * (activeIndex + this.loop);
      this.doTransition({ x: this.translateX, y: this.translateY }, 0);
      this.$emit('changeEnd', this.currentActiveIndex);
      // this.$emit('change', this.currentActiveIndex);
    },
    resize() {
      this.onJumpTo(this.currentActiveIndex);
    },
    isLastIndex() {
      return this.currentActiveIndex >= this.validSlotLength() - 1;
    },
    isFirstIndex() {
      return this.currentActiveIndex <= 0;
    },
    // remove text vnode
    validSlotLength() {
      // carousel use carousel-item as direct children
      return this.validSlots().length;
    },
    validSlots() {
      // fix tabs use cancarousel bug
      return this.$slots.default
        .filter(d => d.componentOptions &&
        (d.componentOptions.tag === 'bm-carousel-item' ||
        d.componentOptions.tag === 'bm-tab-panel'));
    },
  },
  render(h) {
    const {
      prefixCls,
      itemsStyle,
      onDragStart,
      onDragMove,
      onDragEnd,
      currentActiveIndex,
      paginationStyle,
      loop,
      isX,
      showPagination,
      validSlots,
    } = this;
    const directionCls = isX ? `${prefixCls} ${prefixCls}--horizontal` : `${prefixCls} ${prefixCls}--vertical`;

    const pagination = this.$slots.default.map((item, index) => {
      return (
        <li
          role='tab'
          key={`pagination-${index}`}
          class={
            index === currentActiveIndex ? `${prefixCls}__pagination--active` : ''
          }
          style={paginationStyle} ></li>
      );
    });

    const validChildren = validSlots();
    if (loop && !this.firstItem && !this.lastItem) {
      this.firstItem = deepCloneVNode(h, this.$slots.default[0]);
      this.lastItem = deepCloneVNode(h, validChildren[validChildren.length - 1]);
    }
    return (
      <div class={directionCls}>
        <bm-drag
          dragStart={onDragStart}
          dragMove={onDragMove}
          dragEnd={onDragEnd}>
          <div
            ref='carouselItems'
            class={`${prefixCls}__items`}
            style={itemsStyle}>
            {this.lastItem}
            {this.$slots.default}
            {this.firstItem}
          </div>
        </bm-drag>
        {
          showPagination &&
          <div class={`${prefixCls}__pagination`}>
            <ul>
              {pagination}
            </ul>
          </div>
        }
      </div>
    );
  },
};
</script>
