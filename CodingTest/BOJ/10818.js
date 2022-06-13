let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
// 백준 
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');


let arr =  input[1].split(' ');
let numArr =  arr.map(el=> Number(el))

let max = Math.max(...numArr)
let min = Math.min(...numArr)


console.log(min + ' ' + max)

