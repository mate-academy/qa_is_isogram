'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return F for a word with consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return F for a word with repeated L in different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return F for a word with repeated letters in mixed case', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  test('should return true for a single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  test('should return true when all letters are unique and uppercase', () => {
    expect(isIsogram('BACKGROUND')).toBe(true);
  });

  test('should return false when a letter repeats non-consecutively', () => {
    expect(isIsogram('elephant')).toBe(false);
  });

  test('should return T for a word with unique letters in mixed case', () => {
    expect(isIsogram('AbCdEf')).toBe(true);
  });

  test('should return false when the first and last letters repeat', () => {
    expect(isIsogram('radar')).toBe(false);
  });
});
