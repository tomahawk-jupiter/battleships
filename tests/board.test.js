import Board from '../src/factories/board.js';

const board = Board(4);

test('Place ship in valid position horizontally', () => {
  expect(board.placeShip(3, [1, 1], 'horizontal'))
    .toStrictEqual([
        ['.', '.', '.', '.'],
        ['.', 'ship', 'ship', 'ship'],
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
      ]);
});

test('Place ship in valid position vertically', () => {
  expect(board.placeShip(3, [0, 1], 'vertical'))
    .toStrictEqual([
        ['.', '.', '.', '.'],
        ['ship', 'ship', 'ship', 'ship'],
        ['ship', '.', '.', '.'],
        ['ship', '.', '.', '.']
      ]);
});

test('Try to place ship beyond board limit', () => {
  expect(board.placeShip(3, [2, 1], 'horizontal'))
    .toBe('Beyond board limits');
  expect(board.placeShip(3, [0, 2], 'vertical'))
    .toBe('Beyond board limits');
});

test('Try to place ship overlapping another ship', () => {
  expect(board.placeShip(3, [1, 1], 'horizontal'))
    .toBe('Overlaps with another ship');
});

test('Board can receive a hit', () => {
  expect(board.receiveAttack([1, 1])).toBe('hit');
});

test('Board can receive a miss', () => {
  expect(board.receiveAttack([0, 0])).toBe('miss');
});

test('Already targetted cell', () => {
  expect(board.receiveAttack([1, 1])).toBe('already shot this cell');
  expect(board.receiveAttack([0, 0])).toBe('already shot this cell');
});

test('Sink all ships', () => {
  // Enough hits to finish off ship 1
  board.receiveAttack([2, 1]);
  board.receiveAttack([3, 1]);
  // Enough hits to finish off ship 2
  board.receiveAttack([0, 1]);
  board.receiveAttack([0, 2]);
  board.receiveAttack([0, 3]);
  expect(board.allSunk()).toBe(true);
});
