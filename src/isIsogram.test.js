'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if only unique chars`, () => {
    expect(isIsogram('abc')).toEqual(true);
  });

  it(`should return false for consecutive repetition`, () => {
    expect(isIsogram('abcc')).toEqual(false);
  });

  it(`should return false for non-consecutive repetition`, () => {
    expect(isIsogram('abcbc')).toEqual(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
