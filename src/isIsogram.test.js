'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('returns false for a word with repeating consecutive letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('returns false for a word with repeating non-consecutive letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('treats uppercase and lowercase letters as the same', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('returns false for a word with mixed-case duplicates', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('returns true for a single-letter string', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('returns true for a long known isogram', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });
});
