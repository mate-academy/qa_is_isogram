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

  test(`should return false if a string contains repeating digits`, () => {
    expect(isIsogram('playgrounds111')).toEqual(false);
  });

  test(`should return true if a string contains non-repeating
      cyryllic and latin letters`, () => {
    expect(isIsogram('playgroundsслон')).toEqual(true);
  });
});
