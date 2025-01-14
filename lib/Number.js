"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ComposedComponent = _interopRequireDefault(require("./ComposedComponent"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
var NumberComponent = function NumberComponent(props) {
  var form = props.form,
      value = props.value,
      getLocalizedNumber = props.localization.getLocalizedNumber,
      onChangeValidate = props.onChangeValidate;
  var inputValue = value || value === 0 ? value : "";
  if (form.useLocalizer) inputValue = getLocalizedNumber(inputValue);

  var onChange = function onChange(e) {
    var type = form.schema ? form.schema.type : form.type;
    var enteredValue = null;

    if (type === "integer") {
      enteredValue = parseInt(e.target.value, 10);
    } else if (type === "number") {
      var values = e.target.value.split(".");

      if (values.length < 2) {
        enteredValue = parseInt(e.target.value, 10);
      } else if (values.length > 1) {
        if (values[1].length > 0) enteredValue = parseFloat(e.target.value);else enteredValue = "".concat(parseInt(values[0], 10), ".");
      }
    }

    onChangeValidate(enteredValue);
  };

  return _react["default"].createElement(_Text["default"], _extends({}, props, {
    form: Object.assign({}, form, {
      type: "string"
    }),
    value: inputValue,
    otherProps: {
      onChange: onChange
    }
  }));
};

var _default = (0, _ComposedComponent["default"])(NumberComponent);

exports["default"] = _default;