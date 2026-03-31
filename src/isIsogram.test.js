'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for a word without repeated letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true for a word with uppercase letters and without repeated letters`, () => {
    expect(isIsogram('BeAr')).toBe(true);
  });

  it(`should return false for a word with repeated letters`, () => {
    expect(isIsogram('macaron')).toBe(false);
  });

  it(`should return false for a word with uppercase and repeated letters`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
