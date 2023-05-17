'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return true for valid isogram`, () => {
    expect(isIsogram('mate'))
      .toBe(true);
  });

  it(`should return false for an invalid isogram`, () => {
    expect(isIsogram('academy'))
      .toBe(false);
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('maTE'))
      .toBe(true);
  });
});
