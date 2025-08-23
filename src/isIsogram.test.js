'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  // eslint-disable-next-line max-len
  it('should return false for a word with consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it('should return false for a word with non-consecutive repeating letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('should return false when same letter appears in different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for a single-letter word', () => {
    expect(isIsogram('X')).toBe(true);
  });
});
