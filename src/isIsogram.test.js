'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return true for isograms`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`ahould return false for non-isograms`, () => {
    expect(isIsogram('look')).toEqual(false);
    expect(isIsogram('Adam')).toEqual(false);
    expect(isIsogram('Oops')).toEqual(false);
  });
});
