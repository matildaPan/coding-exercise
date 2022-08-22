// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let result = true;
  
  const str = x.toString();
  const length = str.length; 
  
  for(let index = 0; index < length; index ++){
      if(str[index] === str[length-index-1]){
          continue;
      }else{
          result = false;
          break;
      }
  }
  return result;
  
};

const test1 = 121;
const result1 = isPalindrome(test1);
console.log(result1 === true ? 'pass' : 'fail');

const test2 =  -121
const result2 = isPalindrome(test2);
console.log(result2 === false ? 'pass' : 'fail');


const test3 = 10;
const result3 = isPalindrome(test3);
console.log(result3 === false ? 'pass' : 'fail');