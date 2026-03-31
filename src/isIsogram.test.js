'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for string with unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a string with repeat letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test(
    'should return false for a string with repeat letters in different cases ',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    });

  test('should return true for a string with two words and unique letters',
    () => {
      expect(isIsogram('cat dog')).toBe(true);
    });
});
