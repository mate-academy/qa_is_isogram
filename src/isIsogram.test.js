'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should detective isogram`, () => {
    expect(isIsogram('playground')).toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
