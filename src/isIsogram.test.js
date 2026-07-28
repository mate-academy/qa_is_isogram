'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean value`, () => {
    expect(typeof isIsogram('cat')).toBe('boolean');
  });

  it(`should return true for a long word without repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word with repeating consecutive letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for a word with the same letters in different cases`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false for a word starting with a repeated letter in upper case`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
