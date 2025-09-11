'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return true if the word has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false for words with repeating letters`, () => {
    expect(isIsogram('hello')).toBeFalsy();
  });
});
