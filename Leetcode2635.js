/*Given an integer array arr and a mapping function
 fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method. */

var map = function (arr, fn) {
  //solution starts here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let a = fn(arr[i], i);
    newArr.push(a);
  }
  return newArr;
  //solution ends here
};
