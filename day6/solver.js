const fs = require('fs')
const read = fs.readFileSync('./day6/input.txt')
let data = read.toString().split(',').map(Number)

// console.log(data)

// ----- Old method for part one -----
// const passDay = () => {
//   data.forEach((fish, i, arr) => {
//     if (fish == 0) {
//       arr[i] = 6
//       arr.push(8)
//     } else {
//       arr[i] = fish - 1
//     }
//   })
// }

// for (let i = 1; i <= 18; i++) {
//   passDay()
//   console.log(`After ${i} days we have ${data.length} fish:`)
//   // console.log(data)
// }

// ----- New method for part two -----
let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Populate with default data
data.forEach((v) => {
  fish[v]++
})

// Each day remap the data

for (let i = 1; i <= 256; i++) {
  const newFish = [...fish]
  fish.forEach((v, i) => {
    if (i == 0) {
      newFish[6] += v
      newFish[8] += v
      newFish[0] = 0
    } else {
      newFish[i] -= v
      newFish[i - 1] += v
    }
  })

  fish = newFish
}

console.log(fish.reduce((a, b) => a + b))
// console.log(data)
