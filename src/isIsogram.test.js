'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if word is Isogram `, () => {
    expect(isIsogram('subdermatoglyphic'))
      .toBeTruthy();
  });

  it(`should return false if word contains two "t" letters`, () => {
    expect(isIsogram('letters'))
      .toBeFalsy();
  });

  it(`should return false if word contains two "p" and capital letter`, () => {
    expect(isIsogram('Apple'))
      .toBeFalsy();
  });

  it(`should return false if word contains empty string`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });
});
