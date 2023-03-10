<template lang="html">
  <div :class='{[`${prefixCls}`]: true,[`${prefixCls}--block`]: isSelect}' @click='handleClick'>
      <div  v-if='isSelect' :class='{
        [`${prefixCls}--input`]: true,
        [`${prefixCls}--placeholder`]: !selectedValue.join(displayAddon),
        [`${prefixCls}--disabled`]: !!disabled,
      }'>
        <input type="hidden" :value='currentValue' />
        {{display() || placeholder}}
      </div>
      <div :class='{
          [`${prefixCls}__container`]: true,
          [customCls]: !!customCls,
        }' @click.stop='() => {}'>
      <bm-popup
        :visible='currentVisible'
        :get-container="getContainer"
        direction="bottom"
        @maskClick='onMaskClick'>
        <div :class='`${prefixCls}__wrapper`'>
          <div :class='`${prefixCls}__header`'>
            <div :class='`${prefixCls}__cancel`' @click='handleCancel'>{{cancelText}}</div>
            <div :class='`${prefixCls}__title`'>{{title}}</div>
            <div :class='`${prefixCls}__submit`' @click='handleOk'>{{okText}}</div>
          </div>
          <bm-picker-view
            :value='selectedValue'
            :valueMember='valueMember'
            :dataSource='dataSource'
            :cols='cols'
            :selectedValue='selectedValue'
            :itemRender='itemRender'
            @change='onChange'
            @transition='onTransition'
          />
        </div>
      </bm-popup>
    </div>
  </div>
</template>
<script>
import { arrayTreeFilter, formatToInit, formatBackToObject, isArray, hasChildrenObject } from './utils';
import bmPopup from '../../popup';
import bmPickerView from '../../picker-view';

export default {
  name: 'bmPicker',
  components: {
    bmPopup,
    bmPickerView,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'bm-picker',
    },
    title: {
      type: String,
      default: '请选择',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    dataSource: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    defaultValue: [String, Array, Number],
    value: [String, Array, Number],
    displayAddon: {
      type: String,
      default: '',
    },
    displayRender: Function,
    customCls: String,
    cols: Number,
    itemRender: {
      type: Function,
      default: data => data.label,
    },
  },
  data() {
    const defaultValue = this.getInitValue();
    return {
      getContainer: () => document.body,
      isSelect: this.$options.name === 'bmSelect',
      currentValue: defaultValue,
      currentVisible: this.visible,
      oldValue: defaultValue,
    };
  },
  computed: {
    cascade() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && hasChildrenObject(dataSource[0]);
    },
    data() {
      const { dataSource } = this;
      // 针对单列数据源[{}]，转换为[[{}]]
      if (this.isSingleColumn) {
        return [this.dataSource];
      }
      return dataSource;
    },
    selectedValue() {
      // eslint-disable-next-line
      return !isArray(this.currentValue) ? [this.currentValue] : this.currentValue;
    },
    isSingleColumn() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && !hasChildrenObject(dataSource[0]);
    },
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      // console.log(val, oldVal) // eslint-disable-line
      if (this.currentValue === val) return;
      this.currentValue = isArray(val) ? val : [val];
      this.oldValue = this.currentValue;
    },
  },
  methods: {
    getInitValue() {
      const initValue = this.value || this.defaultValue || [];
      // 针对单列数据源{}，转换为[{}]
      if (this.isSingleColumn) {
        return isArray(initValue) ? initValue : [initValue];
      }
      return initValue;
    },
    onChange(selected) {
      const { valueMember } = this;
      const value = selected.map(item => item[valueMember]);
      this.currentValue = value;
      this.$emit('change', this.currentValue);
    },
    handleCancel() {
      this.toggle();
      this.currentValue = this.oldValue;
    },
    handleOk() {
      if (this.isScrolling) {
        return false;
      }
      this.toggle();
      const { valueMember, cols, data, cascade } = this;
      this.currentValue = this.getValue();
      this.oldValue = this.currentValue;

      let selectedValue = this.currentValue;
      if (!isArray(selectedValue)) {
        selectedValue = [selectedValue];
      }
      const _value = formatBackToObject(data, selectedValue, cascade, valueMember, cols);
      this.$emit('ok', _value);
      this.$emit('input', this.currentValue);
    },
    getValue() {
      const { valueMember, data, currentValue, cols } = this;
      if (!currentValue || !currentValue.length) {
        if (this.cascade) {
          return formatToInit(data[0], valueMember, cols);
        }
        return data.map(d => (d[0][valueMember]));
      }
      return currentValue;
    },
    display() {
      const { currentValue, data } = this;
      if (this.cascade) {
        if (currentValue.length) {
          const treeChildren = arrayTreeFilter(data, (item, level) => {
            return item[this.valueMember] === currentValue[level];
          });
          return this.displayGenerator(treeChildren);
        }
      }
      // FIXED
      const treeChildren2 = data.map((d, index) => {
        if (!isArray(currentValue)) {
          return d.filter(obj => currentValue === obj[this.valueMember])[0];
        }
        if (isArray(currentValue) && currentValue[index]) {
          return d.filter(obj => currentValue[index] === obj[this.valueMember])[0];
        }
        return undefined;
      }).filter(t => !!t);

      return this.displayGenerator(treeChildren2);
    },
    displayGenerator(value) {
      const { displayRender, displayMember, displayAddon } = this;
      if (typeof displayRender === 'function') {
        return displayRender(value);
      }
      return value.map((v) => {
        return v && v[displayMember];
      }).join(displayAddon);
    },
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
      this.toggle();
    },
    onMaskClick(e) {
      this.$emit('maskClick', e);
      this.handleCancel();
    },
    // 切换显示状态
    toggle() {
      if (this.disabled) {
        return;
      }
      // eslint-disable-next-line
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
    onTransition(isScrolling) {
      this.isScrolling = isScrolling;
    },
  },
};
</script>
