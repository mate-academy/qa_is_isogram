'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should return true for a word without repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word with repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns false for "Adam" (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('returns false for "Oops" (case-insensitive)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
