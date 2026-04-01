'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a different registrs', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false if the same letter appears in different case', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
