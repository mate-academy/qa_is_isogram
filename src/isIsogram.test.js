'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with repeating letters in different cases',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for a word with non-consecutive repeating letters',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    });

  it('should return true for single-letter words', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('should return true for two different letters', () => {
    expect(isIsogram('Hi')).toBe(true);
  });

  it('should return false for same letter repeated in different cases', () => {
    expect(isIsogram('Aa')).toBe(false);
  });
});
