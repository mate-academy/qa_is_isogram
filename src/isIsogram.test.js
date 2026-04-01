'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty input`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false for same letter in different case`, () => {
    expect(isIsogram('Anya')).toBe(false);
  });

  it(`should return true for different letters`, () => {
    expect(isIsogram('background')).toBe(true);
  });

  it(`should return false for same letter in same case`, () => {
    expect(isIsogram('good')).toBe(false);
  });
});
