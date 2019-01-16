"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hello = () => {
  console.log('Welcome to the Brain Games!');

  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

var _default = hello;
exports.default = _default;
//# sourceMappingURL=index.js.map