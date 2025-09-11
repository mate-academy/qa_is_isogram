'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('isisOGraM')).toBe(false);
  });

  it('should return false for double letters', () => {
    expect(isIsogram('twelve')).toBe(false);
  });

  it('should return false for case-sensitive with double letters', () => {
    expect(isIsogram('Alphabet')).toBe(false);
  });

  it(`should return 'true' for correct isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});
