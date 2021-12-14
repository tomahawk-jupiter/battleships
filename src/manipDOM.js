const homeGrid = document.querySelector('.home-grid');
const awayGrid = document.querySelector('.away-grid');
const directionBtn = document.querySelector('.direction-btn');
const messageDisplay = document.querySelector('.message');

const homeColorScheme = {
  empty: 'blue',
  ship: 'green',
  hit: 'red',
  miss: 'gray',
};

const awayColorScheme = {
  empty: 'blue',
  ship: 'blue',
  hit: 'red',
  miss: 'gray',
};

const drawHomeBoard = (board) => {
  board.forEach((y, indexY) => {
    const row = document.createElement('div');
    row.setAttribute('class', 'grid-row');
    y.forEach((x, indexX) => {
      const col = document.createElement('div');
      col.setAttribute('class', 'cell');
      col.setAttribute('id', `l${indexX}${indexY}`);
      row.appendChild(col);
      col.style['background-color'] = homeColorScheme[x];
    });
    homeGrid.appendChild(row);
  });
};

const drawAwayBoard = (board) => {
  board.forEach((y, indexY) => {
    const row = document.createElement('div');
    row.setAttribute('class', 'grid-row');
    y.forEach((x, indexX) => {
      const col = document.createElement('div');
      col.setAttribute('class', 'cell');
      col.setAttribute('id', `r${indexX}${indexY}`);
      row.appendChild(col);
      col.style['background-color'] = awayColorScheme[x];
    });
    awayGrid.appendChild(row);
  });
};

const changeDirection = () => {
  const direction = directionBtn.innerText;
  directionBtn.innerText = direction === 'horizontal' ? 'vertical'
    : 'horizontal';
};

const displayTurn = (turnMessage) => {
  messageDisplay.innerText = turnMessage;
};

const winMessage = (message) => {
  messageDisplay.innerText = message;
};

export {
  drawHomeBoard,
  drawAwayBoard,
  homeGrid,
  awayGrid,
  changeDirection,
  displayTurn,
  winMessage,
};
