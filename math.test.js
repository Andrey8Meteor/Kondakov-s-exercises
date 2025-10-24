const { divide } = require('./math');

test('divide 6 by 2 should return 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('divide by zero should throw error', () => {
  expect(() => divide(6, 0)).toThrow('Division by zero');
});

test('divide -6 by 2 should return -3', () => {
  expect(divide(-6, 2)).toBe(-3);
});