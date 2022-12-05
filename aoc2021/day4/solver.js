const fs = require('fs')
const read = fs.readFileSync('./day4/example.txt')
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

// Check the boards if there is not a winner
const checkWinnerBoard = () => {
  let winnerBoard = { winner: false }

  // Check board row
  boards.forEach((board) => {
    board.forEach((line) => {
      let nonCheckNumbers = line.filter((value) => value != 'X')
      if (nonCheckNumbers.length == 0) {
        winnerBoard = {
          winner: true,
          board: board,
        }
      }
    })
  })

  // Check board column
  boards.forEach((board) => {
    // Invert rows and columns
    board = board.map((_, colIndex) => board.map((row) => row[colIndex]))
    board.forEach((line) => {
      let nonCheckNumbers = line.filter((value) => value != 'X')
      if (nonCheckNumbers.length == 0) {
        winnerBoard = {
          winner: true,
          board: board,
        }
      }
    })
  })

  return winnerBoard
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
  console.log(drawnNumbers[i], boards)
  markNumber(drawnNumbers[i])
  if (checkWinnerBoard().winner == true) {
    console.log('Winner!')
    console.log(drawnNumbers[i], checkWinnerBoard().board)
    console.log(calcScore(drawnNumbers[i], checkWinnerBoard().board))
    break
  }
}
