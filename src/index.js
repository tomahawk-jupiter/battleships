import './style.css';
import Player from './factories/player';
import {
  drawHomeBoard,
  drawAwayBoard,
  homeGrid,
  awayGrid,
  changeDirection,
  displayTurn,
  winMessage,
} from './manipDOM';
// import clickEvent from './manipDOM';

const boardSize = 10;
let humanTurn = true;
let gameWon;

// Make a player object
const defaultPlacement = [
  {
    length: 3,
    place: [1, 1],
    direction: 'HORIZONTAL',
  },
  {
    length: 3,
    place: [2, 8],
    direction: 'HORIZONTAL',
  },
  {
    length: 3,
    place: [4, 4],
    direction: 'HORIZONTAL',
  },
  {
    length: 3,
    place: [8, 5],
    direction: 'VERTICAL',
  },
  {
    length: 3,
    place: [1, 4],
    direction: 'VERTICAL',
  },
];

const humanPlayer = Player('human', boardSize);
const computerPlayer = Player('computer', boardSize);

defaultPlacement.forEach((ship) => {
  humanPlayer.board.placeShip(ship.length, ship.place, ship.direction);
  computerPlayer.board.placeShip(ship.length, ship.place, ship.direction);
});

// ############### DOM #################

const resetBoardBtn = document.querySelector('.reset-board-btn');
const directionBtn = document.querySelector('.direction-btn');

const computerTakeTurn = () => {
  computerPlayer.autoAttack(humanPlayer);
  homeGrid.replaceChildren();
  drawHomeBoard(humanPlayer.board.gameBoard);
  gameWon = humanPlayer.board.allSunk();
  console.log({ gameWon });
  if (gameWon) {
    winMessage('Computer Wins');
  } else {
    humanTurn = true;
    displayTurn('Your Turn');
  }
};

const takeTurn = (e) => {
  if (humanTurn) {
    const { id } = e.target;
    const idArr = id.split('');
    const coord = [Number(idArr[1]), Number(idArr[2])];
    humanPlayer.makeAttack(coord, computerPlayer);
    awayGrid.replaceChildren();
    drawAwayBoard(computerPlayer.board.gameBoard);
    gameWon = computerPlayer.board.allSunk();
    console.log({ gameWon });
    if (gameWon) {
      winMessage('Player Wins');
    } else {
      humanTurn = false;
      displayTurn("Opponent's Turn");
      // Computers turn:
      setTimeout(computerTakeTurn, 2000);
    }
  }
};

const playerPlacement = (e) => {
  console.log('click');
  if (humanPlayer.board.shipArray.length < 5) {
    // eslint-disable-next-line
    const id = e.target.id;
    const coord = [Number(id.split('')[1]), Number(id.split('')[2])];
    const dir = directionBtn.innerText;
    const shipLen = 3;
    console.log({
      id,
      coord,
      dir,
      shipLen,
    });
    // add create ship and add to shipArray.
    humanPlayer.board.placeShip(shipLen, coord, dir);
    console.log(humanPlayer.board.placeShip(shipLen, coord, dir));
    homeGrid.replaceChildren();
    drawHomeBoard(humanPlayer.board.gameBoard);
    console.log({ shipArray: humanPlayer.board.shipArray });
    console.log({ homeBoard: humanPlayer.board.gameBoard });
  }
};

directionBtn.addEventListener('click', changeDirection);
homeGrid.addEventListener('click', playerPlacement);
awayGrid.addEventListener('click', takeTurn);

resetBoardBtn.addEventListener('click', () => {
  console.log('click!');
  humanPlayer.board.clearBoard();
  console.log({ gameBoard: humanPlayer.board.gameBoard });
  console.log({ shipArray: humanPlayer.board.shipArray });
  homeGrid.replaceChildren();
  drawHomeBoard(humanPlayer.board.gameBoard);
});

drawHomeBoard(humanPlayer.board.gameBoard);
drawAwayBoard(computerPlayer.board.gameBoard);
