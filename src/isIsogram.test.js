'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for case-insensitive duplicates', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should handle single-character words as isograms', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
