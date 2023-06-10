'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word without repeating letters', () => {
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('word')).toBe(true);
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  it('should return true for words with repeating letters', () => {
    expect(isIsogram('IsOgram')).toBe(true);
    expect(isIsogram('WoRd')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('world')).toBe(true);
    expect(isIsogram('apple')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('mM')).toBe(false);
    expect(isIsogram('mm')).toBe(false);
  });

  it('should handle Cyrillic letters', () => {
    expect(isIsogram('Привіт')).toBe(true);
    expect(isIsogram('Мир')).toBe(true);
    expect(isIsogram('Булка')).toBe(true);
  });
});
