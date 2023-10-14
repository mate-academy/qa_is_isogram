'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram word with mixed case', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with repeating letters (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

});
