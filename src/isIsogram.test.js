'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return correct result for isogram`, () => {
    expect(isIsogram('playground')).toBeTruthy();
  });

  it(`should return correct result for not isogram`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
