Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Create a modal that takes up the entire screen 
 * with its message at its center
 *  
 * @param {string} message
 * @param {Function} closeModal
 * @returns {JSX.Element} return a react modal component
 */function Modal(_ref) {
  var message = _ref.message,
    setModalState = _ref.setModalState;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modalcontainer",
    onClick: setModalState,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal",
      children: [message, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "crossContainer",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "leftCross"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rigthCross"
        })]
      })]
    })
  });
}