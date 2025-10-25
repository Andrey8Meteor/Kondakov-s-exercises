import { truncateString } from './truncate.js';

describe('truncateString', () => {
  test('returns original string when shorter than limit', () => {
    expect(truncateString('Hello', 10)).toBe('Hello');
  });

  test('truncates string and adds ellipsis when longer than limit', () => {
    expect(truncateString('Hello World', 5)).toBe('Hello...');
  });

  test('returns empty string when input is empty', () => {
    expect(truncateString('', 5)).toBe('');
  });
});
