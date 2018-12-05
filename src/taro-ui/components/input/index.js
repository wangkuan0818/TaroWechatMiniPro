"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dayjsMin = require("../../../dist/npm/dayjs/dayjs.min.js");

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

var _index = require("../../../dist/npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../dist/npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../dist/npm/classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenzhenhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @createTime 2018/10/11
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 扩展输入框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                1.增加type='date'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                2.增加justify(四个字title两端对齐)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                3.增加type='checkbox',options
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                4.增加icon={value,color,size}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultFunc = function defaultFunc() {};

var AtInput = function (_AtComponent) {
  _inherits(AtInput, _AtComponent);

  function AtInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtInput.__proto__ || Object.getPrototypeOf(AtInput)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$end", "_$anonymousState__temp", "_$anonymousState__temp2", "_$anonymousState__temp3", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "loopArray0", "type", "disabled", "options", "name", "placeholderStyle", "placeholder", "cursorSpacing", "maxlength", "autoFocus", "value", "confirmType", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "icon", "title", "clear", "error", "children"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtInput, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtInput.prototype.__proto__ || Object.getPrototypeOf(AtInput.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.__triggerPropsFn("onChange", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      this.__triggerPropsFn("onFocus", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.__triggerPropsFn("onBlur", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onConfirm",
    value: function onConfirm(e) {
      this.__triggerPropsFn("onConfirm", [null].concat([e.target.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      !this.props.editable && this.__triggerPropsFn("onClick", [null].concat([e].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      this.__triggerPropsFn("onChange", [null].concat([''].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "onErrorClick",
    value: function onErrorClick() {
      this.__triggerPropsFn("onErrorClick", [null].concat([].concat(Array.prototype.slice.call(arguments))));
    }

    // checkbox

  }, {
    key: "handleClick",
    value: function handleClick(option) {
      if (!this.props.disabled) {
        var value = option.value;
        if (Array.isArray(this.props.value)) {
          var selectedList = new Set([].concat(this.props.value));
          if (!selectedList.has(value)) {
            selectedList.add(value);
          } else {
            selectedList.delete(value);
          }
          this.__triggerPropsFn("onChange", [null].concat([Array.from(selectedList)]));
        } else {
          this.__triggerPropsFn("onChange", [null].concat([value]));
        }
      }
    }

    // selector

  }, {
    key: "handleSelect",
    value: function handleSelect(e) {
      this.__triggerPropsFn("onChange", [null].concat([this.props.options[e.target.value]].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$end, _$anonymousState__temp, _$anonymousState__temp2, _$anonymousState__temp3;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var loopArray0 = void 0;

      var _props = this.__props,
          className = _props.className,
          customStyle = _props.customStyle,
          name = _props.name,
          cursorSpacing = _props.cursorSpacing,
          confirmType = _props.confirmType,
          cursor = _props.cursor,
          selectionStart = _props.selectionStart,
          selectionEnd = _props.selectionEnd,
          adjustPosition = _props.adjustPosition,
          border = _props.border,
          title = _props.title,
          editable = _props.editable,
          error = _props.error,
          clear = _props.clear,
          justify = _props.justify,
          placeholder = _props.placeholder,
          placeholderStyle = _props.placeholderStyle,
          placeholderClass = _props.placeholderClass,
          autoFocus = _props.autoFocus,
          value = _props.value,
          options = _props.options,
          icon = _props.icon;
      var _props2 = this.__props,
          maxlength = _props2.maxlength,
          type = _props2.type,
          disabled = _props2.disabled;


      if (type === 'phone') {
        maxlength = 11;
        type = 'number';
      }
      if (!disabled && !editable) {
        disabled = true;
      }

      var $input = void 0;
      if (type === 'date') {
        _$end = (0, _dayjsMin2.default)().format('YYYY-MM-DD');
        // 日期选择

        _$anonymousState__temp = (0, _index6.default)({
          'at-input__input': true,
          'placeholder': !value
        });
      } else if (type === 'selector') {
        _$anonymousState__temp2 = (0, _index6.default)({
          'at-input__input': true,
          'placeholder': !value
        });
      } else if (type === 'checkbox') {
        var selectedList = [].concat(value);
        loopArray0 = options.map(function (option) {
          option = {
            $$original: (0, _index.internal_get_original)(option)
          };
          var $loopState__temp4 = selectedList.includes(option.$$original.value) ? 'at-checkbox__icon at-checkbox__icon--selected' : 'at-checkbox__icon';
          return {
            selectedList: selectedList,
            $loopState__temp4: $loopState__temp4,
            $$original: option.$$original
          };
        });
      } else {
        _$anonymousState__temp3 = (0, _index6.default)('placeholder', placeholderClass);
      }

      var anonymousState__temp6 = (0, _index6.default)({
        'at-input': true,
        'at-input--without-border': !border
      }, className);
      var anonymousState__temp7 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp8 = (0, _index6.default)({
        'at-input__container': true,
        'at-input--error': error,
        'at-input--disabled': disabled
      });
      var anonymousState__temp9 = title ? (0, _index6.default)({ 'at-input__title': true, 'justify': justify }) : null;
      Object.assign(this.__state, {
        _$end: _$end,
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        _$anonymousState__temp3: _$anonymousState__temp3,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        loopArray0: loopArray0,
        type: type,
        disabled: disabled,
        options: options,
        name: name,
        placeholderStyle: placeholderStyle,
        placeholder: placeholder,
        cursorSpacing: cursorSpacing,
        maxlength: maxlength,
        autoFocus: autoFocus,
        value: value,
        confirmType: confirmType,
        cursor: cursor,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        adjustPosition: adjustPosition,
        icon: icon,
        title: title,
        clear: clear,
        error: error
      });
      return this.__state;
    }
  }]);

  return AtInput;
}(_component2.default);

AtInput.properties = {
  "__fn_onChange": null,
  "__fn_onFocus": null,
  "__fn_onBlur": null,
  "__fn_onConfirm": null,
  "editable": null,
  "__fn_onClick": null,
  "__fn_onErrorClick": null,
  "disabled": null,
  "value": null,
  "options": null,
  "className": null,
  "customStyle": null,
  "name": null,
  "cursorSpacing": null,
  "confirmType": null,
  "cursor": null,
  "selectionStart": null,
  "selectionEnd": null,
  "adjustPosition": null,
  "border": null,
  "title": null,
  "error": null,
  "clear": null,
  "justify": null,
  "placeholder": null,
  "placeholderStyle": null,
  "placeholderClass": null,
  "autoFocus": null,
  "icon": null,
  "maxlength": null,
  "type": null
};
AtInput.$$events = ["onInput", "handleSelect", "handleClick", "onFocus", "onBlur", "onConfirm", "onClick", "clearValue", "onErrorClick"];
AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: '完成',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  justify: false,
  autoFocus: false,
  options: [],
  icon: {},
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onErrorClick: defaultFunc,
  onClick: defaultFunc
};
AtInput.propTypes = {
  className: _index4.default.oneOfType([_index4.default.string, _index4.default.array]),
  customStyle: _index4.default.oneOfType([_index4.default.string, _index4.default.object]),
  value: _index4.default.oneOfType([_index4.default.string, _index4.default.number, _index4.default.array]),
  name: _index4.default.string,
  placeholder: _index4.default.string,
  placeholderStyle: _index4.default.string,
  placeholderClass: _index4.default.string,
  title: _index4.default.string,
  confirmType: _index4.default.string,
  cursor: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionStart: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionEnd: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  adjustPosition: _index4.default.bool,
  cursorSpacing: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  maxlength: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  type: _index4.default.string,
  disabled: _index4.default.bool,
  border: _index4.default.bool,
  editable: _index4.default.bool,
  error: _index4.default.bool,
  clear: _index4.default.bool,
  justify: _index4.default.bool,
  backgroundColor: _index4.default.string,
  autoFocus: _index4.default.bool,
  options: _index4.default.array,
  icon: _index4.default.object,
  onChange: _index4.default.func,
  onFocus: _index4.default.func,
  onBlur: _index4.default.func,
  onConfirm: _index4.default.func,
  onErrorClick: _index4.default.func,
  onClick: _index4.default.func
};
exports.default = AtInput;

Component(require('../../../dist/npm/@tarojs/taro-weapp/index.js').default.createComponent(AtInput));