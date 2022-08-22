// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const openBracketStack = []
  let result = true;
  for (let i = 0; i < s.length; i++){
    const bracket = s[i];
    const isOpenBracket = bracketsMap[bracket];
    if(isOpenBracket){
      openBracketStack.push(bracket);
    }else{
      if(openBracketStack.length === 0){
        result = false;
      }else{
        const openBracket = openBracketStack.pop();
        if(bracketsMap[openBracket] === bracket){
          continue;
        }else{
          result = false;
          break;
        }
      }
      
    }
  }

  if(openBracketStack.length !== 0){
    result = false
  }

  return result;

};




const test1 = '()';
const result1 = isValid(test1);
console.log(result1 === true ? 'pass' : 'fail');

const test2 =  '()[]{}' 
const result2 = isValid(test2);
console.log(result2 === true ? 'pass' : 'fail');


const test3 = '(]'; 
const result3 = isValid(test3);
console.log(result3 === false ? 'pass' : 'fail');

const test4 = '{[]}'; 
const result4 = isValid(test4);
console.log(result4 === true ? 'pass' : 'fail');

const test5 = ')(]['; 
const result5 = isValid(test5);
console.log(result5 === false ? 'pass' : 'fail');

const test6 = '"([)]"'; 
const result6 = isValid(test5);
console.log(result6 === false ? 'pass' : 'fail');