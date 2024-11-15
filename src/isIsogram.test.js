'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for a word with unique letters', () => {
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('lumberjack')).toBe(true);
    expect(isIsogram('abcdef')).toBe(true);
  });

  test('should return false for a word with repeated letters', () => {
    expect(isIsogram('repeated')).toBe(false);
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('mississippi')).toBe(false);
  });

  test('should handle mixed case letters as the same', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('Alphabet')).toBe(false);
  });

  test('should handle single-letter words', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });
});
