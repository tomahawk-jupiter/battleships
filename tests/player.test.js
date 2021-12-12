import Player from '../src/factories/player.js'

const player1 = Player('player1', 4);
player1.board.placeShip(3, [1, 1], 'horizontal');
const player2 = Player('player2', 4);
player2.board.placeShip(3, [1, 1], 'horizontal');

test('Player can make attack', () => {
  expect(player1.makeAttack([1, 1], player2)).toBe('hit');
  expect(player1.makeAttack([0, 0], player2)).toBe('miss');
  expect(player1.makeAttack([1, 1], player2)).toBe('already shot this cell');
});

test('Player autoAttack (for ai player) can make attack', () => {
  expect(player2.autoAttack(player1)).toMatch(/hit|miss/);
});
