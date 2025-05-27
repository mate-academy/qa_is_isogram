'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word without repeats', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should handle case-insensitivity (lowercase repeats)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should handle case-insensitivity (uppercase repeats)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for a two-letter word without repeats', () => {
    expect(isIsogram('ab')).toBe(true);
  });

  it('should return false for a two-letter word with repeats', () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it('should return false for word with consecutive repeats', () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return false for word with non-consecutive repeats', () => {
    expect(isIsogram('banana')).toBe(false);
  });
});
