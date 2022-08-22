
/**
 * @param {string} s
 * @return {number}
 */

const romanIntMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

var romanToInt = function(s) {
  let sum = 1;
  let prevNum = 1;
  for(let i = s.length-1; i >= 0; i--){
    const currentNum = romanIntMap[s[i]];
    if(prevNum <= currentNum){
      sum += currentNum
    }else{
      sum -= currentNum
    }
    prevNum = currentNum
  }

  return sum-1;
    
};


const test1 = 'III';
const result1 = romanToInt(test1);
console.log(result1 === 3 ? 'pass' : 'fail');

const test2 =  'LVIII';
const result2 = romanToInt(test2);
console.log(result2 === 58 ? 'pass' : 'fail');


const test3 = 'MCMXCIV';
const result3 = romanToInt(test3);
console.log(result3 === 1994 ? 'pass' : 'fail');
