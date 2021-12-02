const fs = require('fs')
const read = fs.readFileSync('./day2/example.txt')
let data = read.toString().split('\n').map(String)

let hPos = 0
let depth = 0

data.forEach((v) => {
  let instruction = v.split(' ')
  if (instruction[0] == 'forward') hPos += parseInt(instruction[1])
  if (instruction[0] == 'up') depth -= parseInt(instruction[1])
  if (instruction[0] == 'down') depth += parseInt(instruction[1])
})

console.log(`
  hPos: ${hPos}
  depth: ${depth}
  hPos*depth: ${hPos * depth}
`)
