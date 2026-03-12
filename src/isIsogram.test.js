'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for word without same letters`, () => {
    const expected = true;

    expect(isIsogram('playgrounds')).toEqual(expected);
  });

  it(`should return false for word with same letters`, () => {
    const expected = false;

    expect(isIsogram('look')).toEqual(expected);
  });

  it(`should return false for word with same letters in different case`, () => {
    const expected = false;

    expect(isIsogram('Adam')).toEqual(expected);
  });

  it(`should return true for empty string`, () => {
    const expected = true;

    expect(isIsogram('')).toEqual(expected);
  });
});
