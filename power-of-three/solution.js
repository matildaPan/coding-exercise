// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
  let pow = 1;
  let result = false;
  while( pow <= n){
    if(pow === n){
      result = true
    }
    pow = 3*pow;
  }
  return result;
};

const test1 = 27;
const result1 = isPowerOfThree(test1);
console.log(result1 === true ? 'pass' : 'fail');

const test2 = 0;
const result2 = isPowerOfThree(test2);
console.log(result2 === false ? 'pass' : 'fail');

const test3 = 9;
const result3 = isPowerOfThree(test3);
console.log(result3 === true ? 'pass' : 'fail');
