'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  const pairs = {};
  ar.forEach(item => {
    if(pairs[item]){
      pairs[item] += 1;
    }else{
      pairs[item] = 1;
    }
  });

  return Object.values(pairs).reduce((accumulator, colouredPair)=>{
    return accumulator + Math.floor(colouredPair/2);
  }, 0)

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    console.log('[ RESULT ] >', result )

    // ws.write(result + '\n');

    // ws.end();
}

/**
 * How to run this program:
 * $ node ./solution,js
 * enter two lines of input: 
 * 9
 * 10 20 20 10 10 30 50 10 20
 * ctrl + D
 */
