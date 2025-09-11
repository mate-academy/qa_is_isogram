'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true if each letter occurs only once', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('empty string should return true', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return false if there is duplication of letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('function should be case-insensitive (M and m are the same)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
