'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if the word is isogram`, () => {
    expect(isIsogram('word'))
      .toBeTruthy();
  });

  it(`should return 'false' for recurring letters`, () => {
    expect(isIsogram('mood'))
      .toBeFalsy();
  });

  it(`'should return 'false' for not isogram with different cases`, () => {
    expect(isIsogram('moOd'))
      .toBeFalsy();
  });

  it(`should return 'true' for an empty string`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });
});
