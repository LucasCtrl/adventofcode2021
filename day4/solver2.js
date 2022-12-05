const fs = require('fs')
const read = fs.readFileSync('./day4/input.txt')
let data = read.toString().split('\n\n').map(String)

// Clean input data
let drawnNumbers = data.shift().split(',').map(Number)
let boards = data.map((b) =>
  b.split('\n').map((l) =>
    l
      .split(' ')
      .filter((n) => n != '')
      .map(Number)
  )
)

console.log(drawnNumbers, boards)

// Mark number when it's drawn
const markNumber = (number) => {
  boards = boards.map((b) => {
    return b.map((l) => {
      return l.map((v) => {
        return v == number ? 'X' : v
      })
    })
  })
}

// Check the boards if there is not a winner\
let winnerBoard = []
const checkWinnerBoard = () => {
  let found = []
  // Check board row
  boards.forEach((board, boardI) => {
    if (!winnerBoard.includes(boardI)) {
      board.forEach((line) => {
        let nonCheckNumbers = line.filter((value) => value != 'X')
        if (nonCheckNumbers.length == 0) {
          winnerBoard.push(boardI)
          found.push(boardI)
        }
      })
    }
  })

  // Check board column
  boards.forEach((board, boardI) => {
    if (!winnerBoard.includes(boardI)) {
      // Invert rows and columns
      board = board.map((_, colIndex) => board.map((row) => row[colIndex]))
      board.forEach((line) => {
        let nonCheckNumbers = line.filter((value) => value != 'X')
        if (nonCheckNumbers.length == 0) {
          winnerBoard.push(boardI)
          found.push(boardI)
        }
      })
    }
  })
  return found
}

// Calc score
const calcScore = (number, board) => {
  let boardTotal = board
    .join(',')
    .split(',')
    .filter((v) => v != 'X')
    .map(Number)
    .reduce((a, b) => a + b)
  console.log(boardTotal)
  return boardTotal * number
}

for (let i = 0; i < drawnNumbers.length; i++) {
  markNumber(drawnNumbers[i])
  let found = checkWinnerBoard()
  if (found.length > 0) {
    found.forEach((b) => {
      console.log(drawnNumbers[i], b, boards[b])
      console.log(calcScore(drawnNumbers[i], boards[b]))
    })
  }
}
