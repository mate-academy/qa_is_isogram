'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  // eslint-disable-next-line max-len
  it(`should return true for a word that has no repeating letters`, () => {
    expect(isIsogram('machine')).toBe(true);
  });

  it(`should return false for a word that has repeating letters`, () => {
    expect(isIsogram('mechanism')).toBe(false);
  });

  it(`should return false for a word that has repeating letters
    with different case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true with empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true with one letter string`, () => {
    expect(isIsogram('m')).toBe(true);
  });
});
