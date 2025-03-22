'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true if the word is an **isogram**', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false if the word is not an **isogram**', () => {
    expect(isIsogram('look')).toBe(false);
  });
});
