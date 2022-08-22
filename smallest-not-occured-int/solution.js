// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unsortedHash = {};
  for(item of A){
    if(item > 0){
      unsortedHash[item] = true;
    }
  }


  const sortedHash = Object.keys(unsortedHash).sort().reduce((obj, key)=>{
    obj[key] = unsortedHash[key]
    return obj;
  }, {});
  
  const max = 100000;
  let unoccuredIntMin;
  for(let index = 1; index < max; index++){
    if(!sortedHash[index]){
      unoccuredIntMin = index;
      break;
    }
  }
  return unoccuredIntMin;
}

const test1 = [1, 3, 6, 4, 1, 2];
const result1 = solution(test1);
console.log(result1 === 5 ? 'pass' : 'fail');

const test2 =  [1, 2, 3]
const result2 = solution(test2);
console.log(result2 === 4 ? 'pass' : 'fail');


const test3 = [-1, -3];
const result3 = solution(test3);
console.log(result3 === 1 ? 'pass' : 'fail');