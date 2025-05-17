'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "playgrounds" (an isogram)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look" (contains duplicate "o")', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" ignoring case)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns false for a word with non-consecutive duplicates: "Oops"', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
