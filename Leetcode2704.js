/*Write a function expect that helps developers
 test their code. It should take in any value val and 
 return an object with the following two functions.

toBe(val) accepts another value and returns true if 
the two values === each other. If they are not equal, 
it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true if 
the two values !== each other. If they are equal, it should 
throw an error "Equal".
 */

var expect = function (val) {
  //solution starts here
  const obj = {
    toBe: function toBe(val1) {
      if (val === val1) {
        return true;
      } else {
        throw new Error("Not equal");
      }
    },
    notToBe: function notToBe(val1) {
      if (val !== val1) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
  return obj;
  //solution ends here
};

console.log(expect(5).toBe(5));
