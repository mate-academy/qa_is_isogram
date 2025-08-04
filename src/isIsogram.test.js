'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with UpperCase letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
