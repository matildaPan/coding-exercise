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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    const length = s.length;
    const multiple = parseInt(n/length);
    let lastStr = '';
    for(let i = 0; i < n%length; i++){
      lastStr += s[i]
    }
    let count = 0;
    for(let i = 0; i < s.length; i++){
      const letter = s[i];
      if(letter === 'a'){
        count++;
      }
    }

    count = multiple * count

    for(let i = 0; i<lastStr.length; i++){
      const letter = s[i];
      if(letter === 'a'){
        count++;
      }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    console.log({result});

    ws.write(result + '\n');

    ws.end();
}
