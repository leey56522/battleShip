/* eslint-disable no-undef */
const Ship = require('../module/ship');

describe('Ship Factory Function', () => {
  const ship = Ship('cruiser');

  test('id', () => {
    expect(ship.id).toBe('cruiser');
  });
  test('length', () => {
    expect(ship.length).toBe(3);
  });
  test('direction', () => {
    expect(ship.getDirection()).toBe('horizontal');
  });
  test('change direction', () => {
    ship.changeDirection();
    expect(ship.getDirection()).toBe('vertical');
  });
});

describe('hit function', () => {
  const ship = Ship('cruiser');

  test('shows hp', () => {
    expect(ship.getHits()).toStrictEqual([null, null, null]);
  });
  test('gets hit at the right place', () => {
    ship.hit(1);
    expect(ship.getHits()).toStrictEqual([null, 'hit', null]);
  });
});

describe('is sunk function', () => {
  const ship = Ship('cruiser');

  test('ship is not sunk in the beginning', () => {
    expect(ship.isSunk()).toBe(false);
  });
  test('ship is hit but not sunk', () => {
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
  });
  test('ship is hit and sunk', () => {
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
