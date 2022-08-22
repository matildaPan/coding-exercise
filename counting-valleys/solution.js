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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here

    let level = 0;
    let count = 0;

    for(let n = 0; n < steps; n++){
      const step = path[n];
      if(step === 'U'){
        count++;
      }
      if(step === 'D'){
        count--;
      }

      if(count === 0 && step === 'U'){
        level++;
      }

    }

    return level;

}

function main() {
    /**
     * export OUTPUT_PATH=result.txt
     * first line of input = number of steps
     * second line of input = path array
     */
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    console.log({result});

    ws.write(result + '\n');

    ws.end();
}

/**
 * 8
 * UDDDUDUU
 * result = 1
 */