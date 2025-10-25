import { restrictLength } from './utils.js';

// 1. Параметризованные тесты для обрезки строк
describe('restrictLength string truncation', () => {
  test.each([
    ['Hello World', 5, 'Hello...'],
    ['JavaScript', 4, 'Java...'],
    ['Short', 10, 'Short'],
    ['ExactlyTen', 10, 'ExactlyTen'],
    ['', 5, ''],
    ['Long text with spaces', 8, 'Long tex...'],
  ])('restrictLength("%s", %i) should return "%s"', (input, maxLength, expected) => {
    expect(restrictLength(input, maxLength)).toBe(expected);
  });
});

// 2. Параметризованные тесты для ошибок с нестроковыми входными данными
describe('restrictLength error handling', () => {
  test.each([
    [123, 5],
    [null, 5],
    [undefined, 5],
    [{}, 5],
    [[], 5],
    [true, 5],
  ])('restrictLength(%p, %i) should throw error', (input, maxLength) => {
    expect(() => restrictLength(input, maxLength)).toThrow('Input must be a string');
  });
});
EOFcat > utils.test.js << 'EOF'
import { restrictLength } from './utils.js';

// 1. Параметризованные тесты для обрезки строк
describe('restrictLength string truncation', () => {
  test.each([
    ['Hello World', 5, 'Hello...'],
    ['JavaScript', 4, 'Java...'],
    ['Short', 10, 'Short'],
    ['ExactlyTen', 10, 'ExactlyTen'],
    ['', 5, ''],
    ['Long text with spaces', 8, 'Long tex...'],
  ])('restrictLength("%s", %i) should return "%s"', (input, maxLength, expected) => {
    expect(restrictLength(input, maxLength)).toBe(expected);
  });
});

// 2. Параметризованные тесты для ошибок с нестроковыми входными данными
describe('restrictLength error handling', () => {
  test.each([
    [123, 5],
    [null, 5],
    [undefined, 5],
    [{}, 5],
    [[], 5],
    [true, 5],
  ])('restrictLength(%p, %i) should throw error', (input, maxLength) => {
    expect(() => restrictLength(input, maxLength)).toThrow('Input must be a string');
  });
});
