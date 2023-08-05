"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("./index.css");
/**
 * Create a modal that takes up the entire screen 
 * with its message at its center
 *  
 * @param {string} message
 * @param {Function} closeModal
 * @returns {JSX.Element} return a react modal component
 */
function Modal(_ref) {
  var message = _ref.message,
    setModalState = _ref.setModalState;
  return /*#__PURE__*/React.createElement("div", {
    className: "modalcontainer",
    onClick: setModalState
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, message, /*#__PURE__*/React.createElement("div", {
    className: "crossContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "leftCross"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rigthCross"
  }))));
}