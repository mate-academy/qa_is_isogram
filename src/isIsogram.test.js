'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should retutrn 'true' `
  + `if 'word' is empty 'string'`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should retutrn 'true' `
  + `if 'word' is isogram with lowercase letters`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`should retutrn 'true' `
  + `if 'word' is isogram with mixed-case letters`, () => {
    expect(isIsogram('GarDen'))
      .toBe(true);
  });

  it(`should retutrn 'false' `
  + `if 'word' is not isogram with lowercase letters`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`should retutrn 'false' `
  + `if 'word' is not isogram with mixed-case letters`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
