'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for isogram words`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true for the empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for isogram words`
  + `which includes upper letters`, () => {
    expect(isIsogram('Home')).toBe(true);
  });

  it(`should return false for non-isogram words`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for non-isogram words`
  + `which includes upper letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
