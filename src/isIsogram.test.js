'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should  be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`Should return true for playgrounds as input`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  test(`Should return false for look as input`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  test(`Should return false for Adam as input`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  test(`Should return true for empty string as input`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  test(`Should return false for Oops as input`, () => {
    expect(isIsogram('Oops')).toEqual(false);
  });

  test(`Should return true for CAT as input`, () => {
    expect(isIsogram('CAT')).toEqual(true);
  });
});
