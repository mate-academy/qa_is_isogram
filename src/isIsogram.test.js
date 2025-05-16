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

  it('should return true for a single letter string', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for "Dermatoglyphics" (a known long isogram)', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return false for "aba" (contains duplicate "a")', () => {
    expect(isIsogram('aba')).toBe(false);
  });

  // it('should handle mixed case correctly, like "uncopyrightable"', () => {
  //   expect(isIsogram('uncopyrightable')).toBe(true);
  // });

  // it('should handle mixed case with duplicates, like "moOse"', () => {
  //   expect(isIsogram('moOse')).toBe(false);
  // });
});
