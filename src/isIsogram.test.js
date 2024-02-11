'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`Empty line should return true`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`String that has no repeating letters, case-insensetive, should return true`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`String with letters repeating, case-sensetive, should return false`, () => {
    expect(isIsogram('look'))
      .toBe(false);
    expect(isIsogram('loOk'))
      .toBe(false);
  });
});
