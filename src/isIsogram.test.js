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

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('HeLlo')).toBe(false);
    expect(isIsogram('WorLd')).toBe(true);
    expect(isIsogram('ApplE')).toBe(false);
  });

  it('should return false for a word containing non-letter characters', () => {
    expect(isIsogram('isogram1')).toBe(true);
    expect(isIsogram('word!')).toBe(true);
    expect(isIsogram('abc@def')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('mM')).toBe(false);
    expect(isIsogram('Mm')).toBe(false);
    expect(isIsogram('mm')).toBe(false);
  });
});
