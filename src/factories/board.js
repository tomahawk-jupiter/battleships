import Ship from './ship.js';

const Board = (boardSize) => {
  const shipArray = [];
  let sunkShips = 0;

  // Create empty board.
  const gameBoard = [];
  for (let i = 0; i < boardSize; i ++) {
    const row = [];
    for (let j = 0; j < boardSize; j ++) {
      row.push('.');
    }
    gameBoard.push(row);
  }

  const placeShip = (shipSize, startCoord, direction) => {
    const startX = startCoord[0];
    const startY = startCoord[1];

    // Is ship placement within board limits?
    if (direction === 'horizontal') {
      if (startX + shipSize > boardSize) {
        return 'Beyond board limits';
      }
    } else if (direction === 'vertical') {
      if (startY + shipSize > boardSize) {
        return 'Beyond board limits';
      }
    }

    const ship = new Ship(shipSize, startCoord, direction);
    let overlaps = false;
    ship.shipCoords.map(cell => {
      const x = cell[0];
      const y = cell[1];
      // Does placement overlap with another ship?
      if (gameBoard[y][x] === 'ship') {
        overlaps = true;
      } else {
        gameBoard[y][x] = 'ship';
      }
    });

    if (overlaps) {
      return 'Overlaps with another ship';
    }

    // Add to ships array if its a valid placement
    shipArray.push(ship);
    return gameBoard;
  } // end of placeShip()

  const receiveAttack = (attackCoord) => {
    const x = attackCoord[0];
    const y = attackCoord[1];
    if (gameBoard[y][x] === '.') {
      gameBoard[y][x] = 'miss';
      return 'miss';
    } else if (gameBoard[y][x] === 'ship') {
      // hit
      // add to board
      gameBoard[y][x] = 'hit';
      // loop through ship.hit()
      shipArray.map(currentShip => {
        if (currentShip.hit(attackCoord)) {
          if (currentShip.isSunk()) {
            sunkShips += 1;
          }
        }
      });
      return 'hit';
    } else {
      return 'already shot this cell';
    }
  }

  const allSunk = () => {
    if (sunkShips >= shipArray.length) {
      return true;
    }
    return false;
  }

  return {
    placeShip,
    receiveAttack,
    allSunk,
    gameBoard
  };
}

export default Board;
