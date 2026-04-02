'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word with consecutive repeating
    letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for a word with non-consecutive
    repeating letters`, () => {
    expect(isIsogram('level')).toBe(false);
  });

  it(`should be case-insensitive and return false for words like
    "Adam"`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should be case-insensitive and return false for words like
    "Oops"`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a single-letter word', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it(`should return true for a word with mixed case but unique
    letters`, () => {
    expect(isIsogram('AbcDefG')).toBe(true);
  });

  it(`should return false for words containing spaces or special
    characters as repeating letters`, () => {
    expect(isIsogram('hello world')).toBe(false);
  });
});
