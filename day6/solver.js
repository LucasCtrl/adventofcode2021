const fs = require('fs')
const read = fs.readFileSync('./day6/input.txt')
let data = read.toString().split(',').map(Number)

console.log(data)

const passDay = () => {
  data.forEach((fish, i, arr) => {
    if (fish == 0) {
      arr[i] = 6
      arr.push(8)
    } else {
      arr[i] = fish - 1
    }
  })
}

for (let i = 1; i <= 80; i++) {
  passDay()
  console.log(`After ${i} days we have ${data.length} fish:`)
  console.log(data)
}
