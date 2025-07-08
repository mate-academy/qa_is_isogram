/* eslint-disable max-len */
'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('should return true for a word with all unique lowercase letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for a word with same letters in different cases', () => {
    expect(isIsogram('Adam')).toBe(false); // A and a
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return false for a word with repeating letters non-consecutively', () => {
    expect(isIsogram('Oops')).toBe(false); // o and O
  });

  test('should return true for a one-letter string', () => {
    expect(isIsogram('Z')).toBe(true);
  });

  test('should return false for a word with all same letters in different cases', () => {
    expect(isIsogram('AaAaAa')).toBe(false);
  });

  test('should return true for a long isogram word with mixed case', () => {
    expect(isIsogram('Thumbscrew')).toBe(true); // sau 'Subdermatoglyphic'
  });
});
