//let board = new Array(10).fill(new Array(10).fill(null))
let board = [
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
]
const cpuShips = [5, 4, 4] // 1 x Battleship (length 5), 2 x Destroyers (length 4)

function game() {
  setBoard()
}

function setBoard() {
  cpuShips.forEach(shipLength => {
    let horizontalOrientation = Math.random()>0.5 // Pick orientation (vertical/horizontal) randomly for each ship
    // Horizontal ships
    if (horizontalOrientation) {
      let xLimit = board[0].length-shipLength
      let startX = Math.floor(Math.random()*xLimit)
      let y = Math.floor(Math.random()*board.length)
      for (let i=0; i<shipLength; i++) {
        //console.log('Horizontal x:' + (startX+i) + ' y: ' + y)
        board[y][startX+i] = 'Ship'
      }
    }
    // Vertical ships
    else {
      let yLimit = board.length-shipLength
      let x = Math.floor(Math.random()*board[0].length)
      let startY = Math.floor(Math.random()*yLimit)
      for (let i=0; i<shipLength; i++) {
        //console.log('Vertical x:' + x + ' y: ' + (startY+i))
        board[startY+i][x] = 'Ship'
      }
    }
  })
}


game()
console.log(board)
