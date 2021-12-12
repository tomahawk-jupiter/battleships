import Ship from '../factories/ship.js';

// Ship(length, startPos, direction)
const ship = new Ship(3, [1, 1], 'horizontal');
const ship2 = new Ship(3, [1, 1], 'vertical');

test('Ships position (horizontal placement) is an array of coords', () => {
  expect(ship.shipCoords).toStrictEqual([[1,1], [2,1], [3,1]]);
});

test('Ships position (vertical placement) is an array coords', () => {
  expect(ship2.shipCoords).toStrictEqual([[1,1], [1,2], [1,3]]);
});

test('Ship is not hit', () => {
  expect(ship.hit([1,0])).toBe(false);
  expect(ship.damagedCoords.length).toEqual(0);
});

test('Ship is hit', () => {
  expect(ship.hit([1,1])).toBe(true);
  expect(ship.damagedCoords[0]).toStrictEqual([1,1]);
});

test('Ship is not sunk', () => {
  expect(ship.isSunk()).toBe(false);
});

describe('Ship receives enough hits to sink it', () => {
  beforeEach(() => {
    ship.hit([2,1]);
    ship.hit([3,1]);
  });
  test('Ship is sunk', () => {
    expect(ship.isSunk()).toBe(true);
  });
});