import Board from './board';

const Player = (enterName, boardSize) => {
  const board = Board(boardSize);
  const name = enterName;

  const makeAttack = (coord, opponent) => opponent.board.receiveAttack(coord);

  const autoAttack = (opponent) => {
    const getRandomCoord = () => {
      const randomX = Math.floor(Math.random() * boardSize);
      const randomY = Math.floor(Math.random() * boardSize);
      const ranCoord = [randomX, randomY];
      console.log({ ranCoord });
      return ranCoord;
    };

    let attResult = opponent.board.receiveAttack(getRandomCoord());
    let count;
    while (attResult === 'already shot this cell' && count < 100) {
      attResult = opponent.board.receiveAttack(getRandomCoord());
      count += 1;
    }
    return attResult;
  };

  return {
    name,
    board,
    makeAttack,
    autoAttack,
  };
};

export default Player;
