const fs = require('fs')
const read = fs.readFileSync('./day2/input.txt')
let data = read.toString().split('\n').map(String)

let aim = 0
let hPos = 0
let depth = 0

data.forEach((v) => {
  let instruction = v.split(' ')

  if (instruction[0] == 'down') aim += parseInt(instruction[1])
  if (instruction[0] == 'up') aim -= parseInt(instruction[1])
  if (instruction[0] == 'forward') {
    hPos += parseInt(instruction[1])
    depth += aim * parseInt(instruction[1])
  }
})

console.log(`
  hPos: ${hPos}
  depth: ${depth}
  hPos*depth: ${hPos * depth}
`)
