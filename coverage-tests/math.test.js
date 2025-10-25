import { calculateDiscount } from './math.js';

describe('calculateDiscount', () => {
  // 1. Ошибка для нечислового amount
  describe('error handling for invalid amount', () => {
    test.each([
      ['string', 'regular'],
      [null, 'regular'],
      [undefined, 'regular'],
      [[], 'regular'],
      [{}, 'regular'],
      [true, 'regular'],
    ])('throws error for amount %p and customerType %s', (amount, customerType) => {
      expect(() => calculateDiscount(amount, customerType)).toThrow('Amount must be a number');
    });
  });

  // 2. Ошибка для нестрокового customerType
  describe('error handling for invalid customerType', () => {
    test.each([
      [100, 123],
      [100, null],
      [100, undefined],
      [100, []],
      [100, {}],
      [100, true],
    ])('throws error for amount %i and customerType %p', (amount, customerType) => {
      expect(() => calculateDiscount(amount, customerType)).toThrow('Customer type must be a string');
    });
  });

  // 3. Нулевая скидка для отрицательной суммы
  describe('zero discount for negative amount', () => {
    test.each([
      [-100, 'regular'],
      [-50, 'premium'],
      [-10, 'vip'],
      [-1, 'regular'],
    ])('amount %i with customerType %s returns 0', (amount, customerType) => {
      expect(calculateDiscount(amount, customerType)).toBe(0);
    });
  });

  // 4. Скидка для regular клиента
  describe('discount for regular customers', () => {
    test.each([
      [100, 'regular', 10],
      [50, 'regular', 5],
      [200, 'regular', 20],
      [0, 'regular', 0],
      [1000, 'regular', 100],
    ])('amount %i with customerType %s returns %i', (amount, customerType, expected) => {
      expect(calculateDiscount(amount, customerType)).toBe(expected);
    });
  });

  // 5. Скидка для premium клиента
  describe('discount for premium customers', () => {
    test.each([
      [100, 'premium', 20],
      [50, 'premium', 10],
      [200, 'premium', 40],
      [0, 'premium', 0],
      [1000, 'premium', 200],
    ])('amount %i with customerType %s returns %i', (amount, customerType, expected) => {
      expect(calculateDiscount(amount, customerType)).toBe(expected);
    });
  });

  // 6. Нулевая скидка для неизвестного типа клиента
  describe('zero discount for unknown customer types', () => {
    test.each([
      [100, 'vip'],
      [100, 'guest'],
      [100, ''],
      [100, 'unknown'],
      [100, 'basic'],
      [100, 'STANDARD'],
    ])('amount %i with customerType %s returns 0', (amount, customerType) => {
      expect(calculateDiscount(amount, customerType)).toBe(0);
    });
  });
});
