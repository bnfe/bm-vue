<template>
  <bm-cell v-if='checkboxType === "cell"' :disabled='checkboxDisabled' @click='handleClick' isLink>
    <div :class='cls'>
      <div :class='`${prefixCls}__wrapper`'>
        <span :class='`${prefixCls}__inner`'></span>
        <span :class='`${prefixCls}__text`'>
          <slot></slot>
        </span>
        <input type="checkbox" :class='`${prefixCls}__input`' :disabled='checkboxDisabled' :value='value' v-model='model' />
      </div>
    </div>
  </bm-cell>
  <bm-button
    :class='cls'
    v-else-if='checkboxType === "button"'
    :theme='theme'
    size='xs'
    :block='block || isBlock'
    :shape='shape || isShape'
    :disabled='checkboxDisabled'
    :ghost='!isChecked'>
    <input type="checkbox" :class='`${prefixCls}__input`' :disabled='checkboxDisabled' :value='value' v-model='model' @change='onValueChange' />
    <slot></slot>
  </bm-button>
  <div :class='cls' v-else>
    <div :class='`${prefixCls}__wrapper`'>
      <span :class='`${prefixCls}__inner`'></span>
      <span :class='`${prefixCls}__text`'>
        <slot></slot>
      </span>
      <input type="checkbox" :class='`${prefixCls}__input`' :disabled='checkboxDisabled' :value='value' v-model='model' @change='onValueChange'/>
    </div>
  </div>
</template>

<script>
// necessary when used alone
import bmButton from '@/button';
import bmCell from '@/cell';
import Emitter from '@/mixins/emitter';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'bmCheckbox',
  mixins: [Emitter],
  components: {
    bmButton,
    bmCell,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-checkbox',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
    block: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'radius', 'round']),
      default: null,
    },
  },
  data() {
    return {
      currentChecked: this.checked || false,
    };
  },

  computed: {
    model: {
      get() {
        return this.isGroup
          ? this.store : this.value !== undefined
            ? this.value : this.currentChecked;
      },

      set(val) {
        if (this.isGroup) {
          this.dispatch('bmCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.currentChecked = val;
        }
      },
    },
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'bmCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.value) > -1;
      }
    },
    store() {
      return this.isGroup ? this._checkboxGroup.value : this.value;
    },
    checkboxType() {
      return this.isGroup ? this._checkboxGroup.type : this.type;
    },
    checkboxDisabled() {
      return this.isGroup ? (this._checkboxGroup.disabled || this.disabled) : this.disabled;
    },
    isBlock() {
      return this.isGroup ? this._checkboxGroup.block : this.block;
    },
    isShape() {
      return this.isGroup ? this._checkboxGroup.shape : this.shape;
    },
    cls() {
      const { prefixCls, theme, shape, size, checkboxDisabled, isChecked } = this;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--${theme}`]: !!theme,
        [`${prefixCls}--${shape}`]: !!shape,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--checked`]: !!isChecked,
        [`${prefixCls}--disabled`]: !!checkboxDisabled,
      };
    },
  },
  methods: {
    onValueChange(event) {
      // first emit('input') to make the model up to date
      this.$nextTick(_ => { // eslint-disable-line no-unused-vars
        if (this.isGroup) {
          this.dispatch('bmCheckboxGroup', 'change', [[...this.model], event]);
        } else {
          this.$emit('change', this.model, event);
        }
      });
    },
    handleClick(event) {
      if (this.checkboxDisabled) return;
      if (this.isGroup) {
        const index = this.model.indexOf(this.value);
        if (index >= 0) {
          this.model.splice(index, 1);
        } else {
          this.model.push(this.value);
        }
        this.onValueChange(event);
      } else {
        this.model = !this.model;
        this.onValueChange(event);
      }
    },
  },
};
</script>
