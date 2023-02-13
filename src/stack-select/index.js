import StackPicker from '../stack-picker/src/stack-picker';

const StackSelect = Object.assign({}, StackPicker);
StackSelect.name = 'bmStackSelect';
/* istanbul ignore next */
StackSelect.install = function (Vue) {
  Vue.component(StackSelect.name, StackSelect);
};

export default StackSelect;
