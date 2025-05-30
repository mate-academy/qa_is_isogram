'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('returns true for a word with all unique letters', () => {
    expect(isIsogram('machine')).toBe(true);
  });

  test('returns false for a word with repeating letters', () => {
    expect(isIsogram('letter')).toBe(false);
  });

  test('is case insensitive', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('moOse')).toBe(false);
  });

  test('handles words with non-alphabetic characters (optional)', () => {
    expect(isIsogram('abc-def')).toBe(true);
  });
});
