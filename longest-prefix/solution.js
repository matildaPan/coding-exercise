// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

  if(strs.length === 1){
    return strs[0];
  }else{
    let prefix = "" ;

    for(let i = 0; i < strs.length - 1; i++){
      let firstStr;
      let secondStr;
      //first round
      if(prefix === ""){
        firstStr = strs[i];
        secondStr = strs[i+1];
      }
      // after first round
      else{
        firstStr = strs[i].slice(0, prefix.length);
        secondStr = strs[i+1].slice(0, prefix.length);
      }
  
      const minLength = Math.min(firstStr.length, secondStr.length);
  
      for(let j = minLength; j >= 0; j--){
        firstStr = firstStr.slice(0, j);
        secondStr = secondStr.slice(0, j);
        if(firstStr === secondStr){
          prefix = firstStr
          break;
        }
      }
  
      if(prefix.length === 0){
        break;
      }
    }
  
    return prefix;


  }

  
};


const test1 = ["flower","flow","flight"];
const result1 = longestCommonPrefix(test1);
console.log(result1 === "fl" ? 'pass' : 'fail');

const test2 = ["dog","racecar","car"];
const result2 = longestCommonPrefix(test2);
console.log(result2 === "" ? 'pass' : 'fail');

const test3 = ["a"];
const result3 = longestCommonPrefix(test3);
console.log(result3 === "a" ? 'pass' : 'fail');

const test4 = ["a", "a", "b"];
const result4 = longestCommonPrefix(test4);
console.log(result4 === "" ? 'pass' : 'fail');
