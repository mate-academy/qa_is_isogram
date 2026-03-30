'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  it('should return true for input which includes only 1 lette', () => {
    expect(isIsogram('A')).toBe(true);
  });
  it('should return true for an isogram includes cyrillic symbol', () => {
    expect(isIsogram('A@')).toBe(true);
  });
  it('should return true for an isogram word with mixed case', () => {
    expect(isIsogram('Playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with repeating letters (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

});
