'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true for an empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  test(`should return false for a repeating letters string`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  test(`should return true for a non-repeating letters string`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  test(`should return false for a mixed case repeating letters string`, () => {
    expect(isIsogram('loOk')).toEqual(false);
  });
});
