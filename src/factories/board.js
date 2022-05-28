import Ship from './ship';

const Board = (boardSize) => {
  const gameBoard = [];
  const shipArray = [];
  let sunkShips = 0;

  for (let i = 0; i < boardSize; i += 1) {
    const row = [];
    for (let j = 0; j < boardSize; j += 1) {
      row.push('empty');
    }
    gameBoard.push(row);
  }

  const clearBoard = () => {
    shipArray.splice(0);
    gameBoard.splice(0);
    for (let i = 0; i < boardSize; i += 1) {
      const row = [];
      for (let j = 0; j < boardSize; j += 1) {
        row.push('empty');
      }
      gameBoard.push(row);
    }
  };

  const placeShip = (shipSize, startCoord, direction) => {
    const startX = startCoord[0];
    const startY = startCoord[1];

    if (direction === 'HORIZONTAL') {
      if (startX + shipSize > boardSize) {
        return 'Beyond board limits';
      }
    } else if (direction === 'VERTICAL') {
      if (startY + shipSize > boardSize) {
        return 'Beyond board limits';
      }
    }

    const ship = Ship(shipSize, startCoord, direction);
    let overlaps = false;
    ship.shipCoords.forEach((cell) => {
      const x = cell[0];
      const y = cell[1];
      if (gameBoard[y][x] === 'ship') {
        overlaps = true;
      } else {
        gameBoard[y][x] = 'ship';
      }
    });

    if (overlaps) {
      return 'Overlaps with another ship';
    }

    shipArray.push(ship);
    return gameBoard;
  };

  const receiveAttack = (attackCoord) => {
    const x = attackCoord[0];
    const y = attackCoord[1];
    let resultString;
    if (gameBoard[y][x] === 'empty') {
      gameBoard[y][x] = 'miss';
      resultString = 'miss';
    } else if (gameBoard[y][x] === 'ship') {
      gameBoard[y][x] = 'hit';
      shipArray.forEach((currentShip) => {
        if (currentShip.hit(attackCoord)) {
          if (currentShip.isSunk()) {
            sunkShips += 1;
          }
        }
      });
      resultString = 'hit';
    } else {
      resultString = 'already shot this cell';
    }
    return resultString;
  };

  const allSunk = () => {
    if (sunkShips >= shipArray.length) {
      return true;
    }
    return false;
  };

  return {
    placeShip,
    receiveAttack,
    allSunk,
    gameBoard,
    clearBoard,
    shipArray,
  };
};

export default Board;
