'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with no repeated letters', () => {
    expect(isIsogram('abcdef')).toBe(true);
  });

  it('should return false for a word with repeated letters', () => {
    expect(isIsogram('aabbcc')).toBe(false);
  });

  it(`should return false for a word with case-insensitive 
    repeated letters`, () => {
    expect(isIsogram('aA')).toBe(false);
  });

  it('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`should return false for a word with 
    repeated non-alphabet characters`, () => {
    expect(isIsogram('abc123abc')).toBe(false);
  });

  it(`should return true for a word with no repeated 
    non-alphabet characters`, () => {
    expect(isIsogram('abc123')).toBe(true);
  });
});
