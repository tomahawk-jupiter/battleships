import Board from './board.js';

const Player = (enterName, boardSize) => {
  const board = new Board(boardSize);
  const name = enterName;

  const makeAttack = (coord, opponent) => {
    return opponent.board.receiveAttack(coord);
  }

  const autoAttack = (opponent) => {
    const getRandomCoord = () => {
      let randomX = Math.floor(Math.random() + boardSize - 1);
      let randomY = Math.floor(Math.random() + boardSize - 1);
      let ranCoord = [randomX, randomY];
      return ranCoord;
    }

    let attResult = opponent.board.receiveAttack(getRandomCoord());
    while (attResult === 'already shot this cell') {
      attResult = opponent.board.receiveAttack(getRandomCoord());
    }
    return attResult;
  }

  return {
    name,
    board,
    makeAttack,
    autoAttack
  }
}

export default Player;
