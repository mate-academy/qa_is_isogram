'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for a word with unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should reject consecutive repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should reject non-consecutive repeated letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should treat uppercase and lowercase letters as the same', () => {
    expect(isIsogram('aAbB')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return false for repeated letters in mixed case', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  test('should return true for a single-letter word', () => {
    expect(isIsogram('Z')).toBe(true);
  });
});
