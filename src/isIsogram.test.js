'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should retutrn 'true' `
  + `if 'word' is empty 'string'`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should retutrn 'true' `
  + `if 'word' is isogram with lowercase letters`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`should retutrn 'true' `
  + `if 'word' is isogram with mixed-case letters`, () => {
    expect(isIsogram('GarDen'))
      .toBeTruthy();
  });

  it(`should retutrn 'false' `
  + `if 'word' is not isogram with lowercase letters`, () => {
    expect(isIsogram('look'))
      .toBeFalsy();
  });

  it(`should retutrn 'false' `
  + `if 'word' is not isogram with mixed-case letters`, () => {
    expect(isIsogram('Adam'))
      .toBeFalsy();
  });
});
