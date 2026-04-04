'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for a string with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a string with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test(`should return false for a string with
    letters differing only by case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for a string with only one letter', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });
});
