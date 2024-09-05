'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for isogram word "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return true for isogram word "batch"', () => {
    expect(isIsogram('batch')).toBe(true);
  });

  test('should return false for non-isogram word "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for non-isogram word "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for single letter word "a"', () => {
    expect(isIsogram('a')).toBe(true);
  });

  test('should return false for two letter word with duplicates "aa"', () => {
    expect(isIsogram('aa')).toBe(false);
  });

  test('should return true for isogram word with mixed case "AbC"', () => {
    expect(isIsogram('AbC')).toBe(true);
  });

  test(`should return false for non-isogram
    word with mixed case "aAbBcC"`, () => {
    expect(isIsogram('aAbBcC')).toBe(false);
  });

  test('should handle word with spaces', () => {
    expect(isIsogram('a b c')).toBe(false);
  });

  test(`should handle word with spaces and symbols
     where the result is false`, () => {
    expect(isIsogram('a b @')).toBe(false);
  });

  test('should handle long isogram word correctly', () => {
    expect(isIsogram('abcdefghijklmnuvwxyz')).toBe(true);
  });
});
