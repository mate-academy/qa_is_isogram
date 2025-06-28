'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for isogram`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for non-isogram', () => {
    expect(isIsogram('eleven')).toBe(false);
  });
});
