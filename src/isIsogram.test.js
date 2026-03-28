'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for a simple isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('returns false when letters repeat', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('handles single-character strings', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it('detects non-adjacent repeats', () => {
    expect(isIsogram('abca')).toBe(false);
  });
});
