/*Allow One function call */
var once = function (fn) {
  return function (...args) {
    let call = 0;
    if ((call = 0)) {
      let a = function fn(...args) {
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
          sum += args[i];
        }
      };
    }
  };
};

// let fn = (a, b, c) => a + b + c;

function fn(a, b, c) {
  return a + b + c;
}
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
