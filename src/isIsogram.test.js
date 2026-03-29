'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
  it('should return true for an isogram with unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
});
it('should return false for a non-isogram with repeated letters', () => {
  expect(isIsogram('look')).toBe(false);
});
it('should return false for a non-isogram with letters differing only by case', () => {
  expect(isIsogram('Anna')).toBe(false);
});
it('should return true for an empty string', () => {
  expect(isIsogram('')).toBe(true);
});
it('should return true for a single letter', () => {
  expect(isIsogram('a')).toBe(true);
});
it('should return true for a string with all unique letters', () => {
  expect(isIsogram('abcdefg')).toBe(true);
});
it('should return false for a string with repeated letters', () => {
  expect(isIsogram('aaabbb')).toBe(false);
});
});
