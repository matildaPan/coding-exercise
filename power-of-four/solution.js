// https://leetcode.com/problems/power-of-four/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {

  if(n===1){
    return true;
  }if(n<1){
    return false
  }

  const reminder = n % 4;
  if(reminder === 0){
    return isPowerOfFour(n/4)
  }
  else{
    return false;
  }
    
};


const test1 = 16;
const result1 = isPowerOfFour(test1);
console.log(result1 === true ? 'pass' : 'fail');

const test2 = 5;
const result2 = isPowerOfFour(test2);
console.log(result2 === false ? 'pass' : 'fail');

const test3 = 1;
const result3 = isPowerOfFour(test3);
console.log(result3 === true ? 'pass' : 'fail');

const test4 = 8;
const result4 = isPowerOfFour(test4);
console.log(result4 === false ? 'pass' : 'fail');