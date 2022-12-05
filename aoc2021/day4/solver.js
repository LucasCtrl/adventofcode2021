const fs = require('fs')
const read = fs.readFileSync('./day4/example.txt')
let data = read.toString().split('\n\n').map(String)

// ---------- Clean the input ----------

let drawNumbers = data.shift().split(',').map(Number)

let boards = data.map(l => {
  let newLine = l.split('\n')
  return newLine
})

boards = boards.map(b => {
  return b.map(l => {
    return l.split(' ').filter(v => v != '').map(Number)
  })
})

console.log(drawNumbers, boards)

// ---------- Play the input ----------
let i = 0
let currentNumber
let board = null

while (i < drawNumbers.length && board == null) {
  currentNumber = drawNumbers[i]

  // Replace draw number
  boards = boards.map(b => {
    return b.map(l => {
      return l.map(v => v == drawNumbers[i] ? 'X' : v)
    })
  })

  console.log(currentNumber, boards)

  // Check if Bingo
  let j = 0
  while(j < boards.length && board == null) {
    // Check line

    let test = boards[j].map(b => {
      b = b.filter(v => v != 'X')
      if (b.length == 0) return boards[j]
      console.log(j, b)
    })
    console.log(test)

    j++
  }

  i++
}
