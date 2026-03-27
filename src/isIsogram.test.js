'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for an isogram word', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a non-isogram word', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for a non-isogram word (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for a word with repeating letters but case-insensitive', () => {
    expect(isIsogram('Apple')).toBe(false);
  });
});
