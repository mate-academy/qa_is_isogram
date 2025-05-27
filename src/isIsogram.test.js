'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for repeating letter with different case`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return false for consecutive repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for non-consecutive repeating letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
