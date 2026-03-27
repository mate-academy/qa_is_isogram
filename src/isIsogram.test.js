'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for a word with no repeating letters`, () => {
    expect(isIsogram('tower')).toBe(true);
  });

  it(`should return false for a word with repeating letters`, () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for a word with
     no repeating letters with mixed case`, () => {
    expect(isIsogram('Camel')).toBe(true);
  });

  it(`should return true for a single letter`, () => {
    expect(isIsogram('a')).toBe(true);
  });
});
