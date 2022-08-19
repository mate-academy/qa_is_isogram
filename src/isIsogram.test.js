'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true when the string is empty`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should return true when no repeating letters`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`should return false when there are repeating letters`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`should return false when repeating in different registers`, () => {
    expect(isIsogram('aPple'))
      .toBeFalsy();
  });
});
