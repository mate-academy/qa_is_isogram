'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should throw an error if a 'word' is not a string`, () => {
    expect(() => isIsogram(NaN)).toThrow();
  });

  it('should handle empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true if a word is isogram', () => {
    expect(isIsogram('question')).toBe(true);
  });

  it('should return false if a word is not isogram', () => {
    expect(isIsogram('mafia')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(isIsogram('MammA')).toBe(false);
  });
});
