const fs = require('fs')
const read = fs.readFileSync('./day5/input.txt')
let data = read
  .toString()
  .split('\n')
  .map((line) =>
    line.split(' -> ').map((coordinates) => {
      coordinates = coordinates.split(',')
      return { x: Number(coordinates[0]), y: Number(coordinates[1]) }
    })
  )

// console.log(data)

// ---------- Generate diagram ----------
let x = 0
let y = 0

let diagram = []

// Get diagram dimensions
data.forEach((line) => {
  line.forEach((coordinates) => {
    if (coordinates.x + 1 > x) x = coordinates.x + 1
    if (coordinates.y + 1 > y) y = coordinates.y + 1
  })
})

// Draw diagram
for (let i = 0; i < y; i++) {
  diagram.push([])
  for (let j = 0; j < x; j++) {
    diagram[i].push(0)
  }
}

// console.log(x, y, diagram)

// ---------- Complete diagram ----------
data.forEach(([from, to]) => {
  // Get horizontal lines
  if (from.y == to.y) {
    // console.log('h:', from.y)
    if (from.x < to.x) {
      // Left to right
      for (let x = from.x; x <= to.x; x++) {
        diagram[from.y][x]++
      }
    } else {
      // Rigth to left
      for (let x = to.x; x <= from.x; x++) {
        diagram[from.y][x]++
      }
    }
  }
  // Get vertical lines
  if (from.x == to.x) {
    // console.log('v:', from.x)
    if (from.y < to.y) {
      // Top to bottom
      for (let y = from.y; y <= to.y; y++) {
        diagram[y][from.x]++
      }
    } else {
      // Bottom to top
      for (let y = to.y; y <= from.y; y++) {
        diagram[y][from.x]++
      }
    }
  }
})

let result = diagram
  .map((line) => {
    return line.filter((v) => v > 1)
  })
  .join(', ')
  .split(',')
  .filter((v) => v != ' ' && v != '').length

// console.log(
//   result
//     .join(', ')
//     .split(',')
//     .filter((v) => v != ' ' && v != '').length
// )

console.log(x, y, diagram, result)
