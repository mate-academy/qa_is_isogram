'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for an isogram word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for a word with repeating letters in different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for an empty string (edge case)', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('return false for a word with repeating letters and mixed case', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  test('should return true for a word with single unique letter ', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
