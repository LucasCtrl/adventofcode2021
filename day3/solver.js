const { execSync } = require('child_process')
const fs = require('fs')
const read = fs.readFileSync('./day3/input.txt')
let data = read.toString().split('\n').map(String)

function part1() {
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
}

function part2() {
  let i = 0
  let j = 0
  let oxygen = data
  let co2 = data
  let decimalOxygen
  let decimalCo2

  console.log('------------- Oxygen -------------')
  while (i < data[0].length && oxygen.length > 1) {
    let zero = 0
    let one = 0
    oxygen.forEach(v => {
      v[i] == 0 ? zero++ : one++
    })

    console.log(oxygen)
    console.log(i, zero, one)

    oxygen = oxygen.map(v => {
      if (zero < one || zero == one) {
        if (v[i] == '1') return v
      }
      else if (zero > one) {
        if (v[i] == '0') return v
      }
    })

    oxygen = oxygen.filter((v) => v != undefined)

    console.log(oxygen)

    i++
  }

  console.log('------------- C02 -------------')
  while (j < data[0].length && co2.length > 1) {
    let zero = 0
    let one = 0
    co2.forEach(v => {
      v[j] == 0 ? zero++ : one++
    })

    console.log(co2)
    console.log(j, zero, one)

    co2 = co2.map(v => {
      if (zero < one || zero == one) {
        if (v[j] == '0') return v
      }
      else if (zero > one) {
        if (v[j] == '1') return v
      }
    })

    co2 = co2.filter((v) => v != undefined)

    console.log(co2)

    j++
  }

  decimalOxygen = parseInt(oxygen[0], 2)
  decimalCo2 = parseInt(co2[0], 2)

  console.log(oxygen[0], decimalOxygen)
  console.log(co2[0], decimalCo2)
  console.log(decimalOxygen * decimalCo2)
}

part2()
