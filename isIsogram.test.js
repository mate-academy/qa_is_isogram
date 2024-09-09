'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test('return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for a valid isogram with lowercase letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('return false for a word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('return f for a word with repeated letters,case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('return true for a single letter word', () => {
    expect(isIsogram('A')).toBe(true);
  });

  test('return true for a valid isogram with mixed case letters', () => {
    expect(isIsogram('Background')).toBe(true);
  });

  test('return f for a word with mixed case repeated letters', () => {
    expect(isIsogram('Balloon')).toBe(false);
  });
});
