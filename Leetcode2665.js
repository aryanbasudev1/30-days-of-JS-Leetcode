var createCounter = function (init) {
  //solution starts here
  let count = init;
  const obj = {
    increment: function increment() {
      count++;
      return count;
    },
    decrement: function decrement() {
      count--;
      return count;
    },
    reset: function reset() {
      count = init;
      return count;
    },
  };
  return obj;
  //solution ends here
};
const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
