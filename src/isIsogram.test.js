'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if the 'word' is empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' if the 'word' is an isogram`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return 'false' if 'word' contain dublicates of letters`, () => {
    expect(isIsogram('hello'))
      .toBeFalsy();
  });

  it(`should be case-insensitive and return 'fasle' for 'L' and 'l'`, () => {
    expect(isIsogram('Lendlease')).toBeFalsy();
  });
});
