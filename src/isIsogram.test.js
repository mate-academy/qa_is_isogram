'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false for repeating letters`, () => {
    expect(isIsogram('repeating')).toBe(false);
  });

  it(`should return false for repeating letters case insensitive`, () => {
    expect(isIsogram('repEating')).toBe(false);
  });

  it(`should return true for not repeating letters`, () => {
    expect(isIsogram('bed')).toBe(true);
  });

  it(`should return true as in the word 1 letter`, () => {
    expect(isIsogram('q')).toBe(true);
  });
});
