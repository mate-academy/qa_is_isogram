/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with non-consecutive repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should be case-insensitive and return false for repeating letters in different cases', () => {
    expect(isIsogram('Mm')).toBe(false);
  });

  it('should return true for a word with all unique letters regardless of case', () => {
    expect(isIsogram('Play')).toBe(true);
  });

  it('should return false for a word with multiple repeating letters', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for a longer word with all unique letters', () => {
    expect(isIsogram('uncopyrightable')).toBe(true);
  });
});
