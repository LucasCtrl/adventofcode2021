const fs = require('fs')
const read = fs.readFileSync('./day3/input.txt')
let data = read.toString().split('\n').map(String)

let gamma = ''
let epsilon = ''
let decimalGamma
let decimalEpsilon

for (let i = 0; i < data[0].length; i++) {
  let zero = 0
  let one = 0
  data.forEach(v => {
    v[i] == 0 ? zero++ : one++
  })

  console.log(zero, one)
  zero > one ? gamma += '0' : gamma += '1'
  zero < one ? epsilon += '0' : epsilon += '1'
}

decimalGamma = parseInt(gamma, 2)
decimalEpsilon = parseInt(epsilon, 2)

console.log(gamma, decimalGamma)
console.log(epsilon, decimalEpsilon)
console.log(decimalGamma * decimalEpsilon)
