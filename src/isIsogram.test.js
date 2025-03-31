'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  test(`should return true for 'look'`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  test(`should return true for 'Adam'`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });

  test(`should return true for ' '`, () => {
    expect(isIsogram(' '))
      .toBe(true);
  });
});
