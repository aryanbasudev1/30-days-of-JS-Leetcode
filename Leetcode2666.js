/*Allow One function call */
var once = function (fn) {
  let funCalled = false;
  let result;
  return function (...args) {
    if (!funCalled) {
      result = fn(...args);
      funCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};
