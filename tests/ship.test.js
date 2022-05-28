import Ship from '../src/factories/ship.js';

// Ship(length, startPos, direction)
const ship = Ship(3, [1, 1], 'HORIZONTAL');
const ship2 = Ship(3, [1, 1], 'VERTICAL');

test('Ships position (HORIZONTAL placement) is an array of coords', () => {
  expect(ship.shipCoords).toStrictEqual([
    [1, 1],
    [2, 1],
    [3, 1],
  ]);
});

test('Ships position (VERTICAL placement) is an array coords', () => {
  expect(ship2.shipCoords).toStrictEqual([
    [1, 1],
    [1, 2],
    [1, 3],
  ]);
});

test('Ship is not hit', () => {
  expect(ship.hit([1, 0])).toBe(false);
  expect(ship.damagedCoords.length).toEqual(0);
});

test('Ship is hit', () => {
  expect(ship.hit([1, 1])).toBe(true);
  expect(ship.damagedCoords[0]).toStrictEqual([1, 1]);
});

test('Ship is not sunk', () => {
  expect(ship.isSunk()).toBe(false);
});

describe('Ship receives enough hits to sink it', () => {
  beforeEach(() => {
    ship.hit([2, 1]);
    ship.hit([3, 1]);
  });
  test('Ship is sunk', () => {
    expect(ship.isSunk()).toBe(true);
  });
});
