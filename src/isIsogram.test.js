'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  it(`should return 'true' if the 'word' is an isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`should return 'true' if the 'word' is empty string`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should return 'false' if 'word' contain dublicates of letters`, () => {
    expect(isIsogram('hello'))
      .toBeFalsy();
  });

  it(`should be case-insensitive and return 'fasle' for 'T' and 't'`, () => {
    expect(isIsogram('Theater'))
      .toBeFalsy();
  });

  it(`should return true if 'word' is an isogram written in upper-case`, () => {
    expect(isIsogram('EARTH'))
      .toBeTruthy();
  });

  it(`should return 'fasle' if 'word' contains dublicates of letters `
    + `and written in upper-case`, () => {
    expect(isIsogram('MCDOLANDS'))
      .toBeFalsy();
  });
});
