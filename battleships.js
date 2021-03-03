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
// 1 x Battleship (length 5), 2 x Destroyers (length 4)
let cpuShips = [5, 4, 4]

// Main game function
function game() {
  setBoard()
}

function setBoard() {
  let tempBoard = [...board]

  for (let i=0; i<cpuShips.length; i++) {
    // Initialise current ship to be placed
    let isHorizontal = Math.random()>0.5
    let shipLength = cpuShips[i]
    let shipPlacementAllowed = true
    // Starting point limits to prevent breaching board boundaries
    let xLimit = board[0].length-shipLength
    let yLimit = board.length-shipLength
    // Set starting point dependant on orientation
    let startPoint
    if (isHorizontal) startPoint = Math.floor(Math.random()*xLimit)
    else startPoint = Math.floor(Math.random()*yLimit)
    // Fixed axis
    let x =  Math.floor(Math.random()*board[0].length)
    let y = Math.floor(Math.random()*board.length)
    // Place each part of ship
    for (let n=0; n<shipLength; n++) {
      // If ship placement clashes with a previous ship then redo current ship placement
      if (tempBoard[(isHorizontal ? y : (startPoint+n))][(isHorizontal ? (startPoint+n) : x)]==='Ship') {
        cpuShips.push(shipLength)
        shipPlacementAllowed = false
        break
      }
      // If no clash then place parts of ship as normal
      else {
        tempBoard[(isHorizontal ? y : (startPoint+n))][(isHorizontal ? (startPoint+n) : x)] = 'Ship'
      }
    }
    // If ship placement was OK then add it to board
    if (shipPlacementAllowed) {
      board = [...tempBoard].map(row => [...row])
    }
    // Else since there was a clash then reset the tempBoard and move on
    else {
      tempBoard = [...board].map(row => [...row])
    }
  }

  console.log(board)
}

game()
