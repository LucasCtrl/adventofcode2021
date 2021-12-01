const fs = require('fs')
const read = fs.readFileSync('./day1/input.txt')
let data = read.toString().split('\n').map(Number)

let part1 = data.filter((v, i, arr) => v < arr[i + 1]).length

// let part2 = data.filter(
//   (v, i, arr) =>
//     arr[i] + arr[i + 1] + arr[i + 2] < arr[i + 1] + arr[i + 2] + arr[i + 3]
// ).length;

let part2 = data
  .map((v, i, arr) => v + arr[i + 1] + arr[i + 2])
  .filter((v, i, arr) => !isNaN(v) && v < arr[i + 1]).length

console.log('Part 1:', part1)
console.log('Part 2:', part2)
